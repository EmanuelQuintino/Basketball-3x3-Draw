import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import logo from "../assets/basquete3x3.png";

type Athlete = {
  id: string;
  name: string;
  pot: number;
};

export function generateDrawPDF() {
  const obs = prompt("Registrar observações do sorteio:");

  if (obs == null) {
    return;
  }

  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const drawn: Athlete[] = JSON.parse(
    localStorage.getItem("@basketball-draw:drawn") || "[]",
  );

  // logo
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  const logoProportion = 1.5;
  const logoWidth = 50 * logoProportion;
  const logoHeight = 20 * logoProportion;
  const logoX = (pageWidth - logoWidth) / 2;

  doc.addImage(logo, "PNG", logoX, 10, logoWidth, logoHeight);

  // title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("SORTEIO OFICIAL - TIMES FORMADOS", pageWidth / 2, 50, {
    align: "center",
  });

  const teams: Athlete[][] = [];

  for (let i = 0; i < 6; i++) {
    teams.push([
      drawn[i], // pot 1
      drawn[i + 6], // pot 2
      drawn[i + 12], // pot 3
      drawn[i + 18], // pot 4
    ]);
  }

  // table
  const tableWidth = 60;
  const marginLeft = 10;
  const gap = 5;

  teams.forEach((team, index) => {
    const isTop = index < 3;
    const col = index % 3;

    const startX = marginLeft + col * (tableWidth + gap);
    const startY = isTop ? 60 : 105;

    autoTable(doc, {
      startY,
      margin: { left: startX },
      tableWidth,
      head: [[`TIME ${index + 1}`]],

      body: Array.from({ length: 4 }).map((_, i) => {
        const athlete = team[i];

        if (!athlete) {
          return [""];
        }

        return [`${athlete.name}`];
      }),

      theme: "grid",
      styles: {
        halign: "center",
        fontSize: 11,
        textColor: [40, 40, 40],
      },
      headStyles: {
        fillColor: [230, 120, 0],
        textColor: 255,
        halign: "center",
      },

      didParseCell: function (data) {
        if (data.section == "body" && data.row.index == 0) {
          data.cell.styles.fontStyle = "bold";
        }
      },
    });
  });

  // observation
  const obsStartY = 160;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text("Observações:", marginLeft, obsStartY);
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.1);

  doc.rect(marginLeft, obsStartY + 2, pageWidth - marginLeft * 2, 30);

  if (obs.trim() !== "") {
    const linhas = doc.splitTextToSize(obs, pageWidth - 30);
    doc.text(linhas, 15, obsStartY + 9);
  }

  // signature
  const signatureStartY = 220;
  const signatureGapX = 5;
  const signatureWidth = 60;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);

  for (let i = 0; i < 6; i++) {
    const row = i < 3 ? 0 : 1;
    const col = i % 3;

    const startX = marginLeft + col * (signatureWidth + signatureGapX);

    const startY = signatureStartY + row * 25;

    doc.line(startX, startY, startX + signatureWidth, startY);

    doc.text(`Representante - TIME ${i + 1}`, startX + signatureWidth / 2, startY + 6, {
      align: "center",
    });
  }

  // date
  const now = new Date();
  const date = now.toLocaleDateString("pt-BR");
  const time = now.toLocaleTimeString("pt-BR");

  doc.setFontSize(11);
  doc.text(
    `Sorteio: ${now.getTime()} em ${date} às ${time}`,
    pageWidth / 2,
    pageHeight - 15,
    {
      align: "center",
    },
  );

  doc.save(`basquete_3x3_sorteio_${now.getTime()}.pdf`);
}
