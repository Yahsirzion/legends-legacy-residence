"""Build the branded, fillable Veteran Housing Intake Form PDF.

Content is the client's simplified form (Veteran_Housing_Intake_Form_Simplified.docx)
rendered verbatim. Brand system per CLAUDE.md §4; return-channel footer per §11.1.
"""
from reportlab.lib.colors import Color, white
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas

NAVY = Color(28 / 255, 43 / 255, 69 / 255)
NAVY_DEEP = Color(18 / 255, 29 / 255, 48 / 255)
GOLD = Color(201 / 255, 164 / 255, 92 / 255)
CREAM = Color(247 / 255, 243 / 255, 234 / 255)
INK = Color(28 / 255, 43 / 255, 69 / 255)
MUTED = Color(90 / 255, 100 / 255, 118 / 255)

W, H = letter
ML, MR = 54, 54
CONTENT_W = W - ML - MR
OUT = "/Users/admin/Claude code/legends-legacy-residence/app/public/LLR_Veteran_Housing_Intake_Form.pdf"
LOGO = "/private/tmp/claude-501/-Users-admin-Claude-code/7a9c40e5-4788-44ad-9705-ea4083945b51/scratchpad/logo-small.png"

FOOTER_H = 78


def spaced(c, x, y, text, font, size, tracking):
    """Draw letter-spaced text via a text object (canvas has no setCharSpace)."""
    c.saveState()
    t = c.beginText(x, y)
    t.setFont(font, size)
    t.setCharSpace(tracking)
    t.textOut(text)
    c.drawText(t)
    c.restoreState()


class Form:
    def __init__(self, path):
        self.c = canvas.Canvas(path, pagesize=letter)
        self.c.setTitle("Veteran Housing Intake Form")
        self.c.setAuthor("Legends Legacy Residence LLC")
        self.c.setSubject("Veteran Housing Intake Form")
        self.n = 0
        self.field_i = 0
        self.new_page(first=True)

    # ---------- chrome ----------
    def header(self, first):
        c = self.c
        h = 74 if first else 50
        c.setFillColor(NAVY)
        c.rect(0, H - h, W, h, stroke=0, fill=1)
        try:
            c.drawImage(LOGO, ML, H - h + (h - 46) / 2, 46, 46,
                        mask="auto", preserveAspectRatio=True)
            tx = ML + 60
        except Exception:
            tx = ML
        if first:
            c.setFillColor(CREAM)
            c.setFont("Times-Roman", 19)
            c.drawString(tx, H - 36, "Legends Legacy Residence")
            c.setFillColor(GOLD)
            spaced(c, tx, H - 49, "A HOME FOR VETERANS", "Helvetica-Bold", 7.2, 1.6)
            c.setFillColor(CREAM)
            c.setFont("Times-Roman", 12.5)
            c.drawRightString(W - MR, H - 42, "Veteran Housing Intake Form")
        else:
            c.setFillColor(CREAM)
            c.setFont("Times-Roman", 12)
            c.drawString(tx, H - 33, "Veteran Housing Intake Form")
            c.setFillColor(GOLD)
            c.setFont("Helvetica", 8)
            c.drawRightString(W - MR, H - 33, "Legends Legacy Residence")
        return H - h

    def footer(self):
        c = self.c
        y = FOOTER_H
        c.setFillColor(NAVY_DEEP)
        c.rect(0, 0, W, y, stroke=0, fill=1)
        c.setStrokeColor(GOLD)
        c.setLineWidth(1)
        c.line(ML, y - 10, W - MR, y - 10)
        c.line(ML, y - 14, W - MR, y - 14)

        c.setFillColor(GOLD)
        spaced(c, ML, y - 28, "RETURNING THIS FORM", "Helvetica-Bold", 7.2, 1.4)
        c.setFillColor(CREAM)
        c.setFont("Helvetica", 8.6)
        c.drawString(ML, y - 42, "In person  •  By mail: 69 State Street, Suite 1300, Albany, NY 12207  "
                                 "•  By phone: 518-849-8008")
        c.drawString(ML, y - 54, "By email: info@legendslegacyresidence.com")
        c.setFillColor(Color(0.78, 0.80, 0.85))
        c.setFont("Helvetica-Oblique", 7.8)
        c.drawString(ML, y - 68, "Please note: standard email is not encrypted. Mail or phone is recommended "
                                 "for sensitive information.")
        c.setFillColor(GOLD)
        c.setFont("Helvetica", 7.5)
        c.drawRightString(W - MR, y - 28, "Page %d" % self.n)

    def new_page(self, first=False):
        if not first:
            self.footer()
            self.c.showPage()
        self.n += 1
        self.c.setFillColor(white)
        self.c.rect(0, 0, W, H, stroke=0, fill=1)
        top = self.header(first)
        self.y = top - (30 if first else 22)
        if first:
            self.c.setFillColor(MUTED)
            self.c.setFont("Helvetica", 10.5)
            self.c.drawString(ML, self.y, "We just need a few basics to get started — a staff member "
                                          "will fill in the rest with you.")
            self.y -= 15

    def space(self, need):
        if self.y - need < FOOTER_H + 26:
            self.new_page()

    # ---------- content ----------
    def section(self, title):
        self.space(70)
        c = self.c
        self.y -= 6           # breathing room above each section heading
        c.setFillColor(NAVY)
        c.setFont("Times-Bold", 13.5)
        c.drawString(ML, self.y, title)
        self.y -= 8
        c.setStrokeColor(GOLD)
        c.setLineWidth(1)
        c.line(ML, self.y, ML + 74, self.y)
        c.line(ML, self.y - 4, ML + 74, self.y - 4)
        self.y -= 12

    def field(self, label, width=None, gap=16.5):
        """Labeled fillable text field."""
        self.space(34)
        c = self.c
        c.setFillColor(INK)
        c.setFont("Helvetica", 9.8)
        c.drawString(ML, self.y, label)
        lw = c.stringWidth(label, "Helvetica", 9.8)
        x = ML + lw + 8
        w = (width or (CONTENT_W - lw - 8))
        w = min(w, W - MR - x)
        self.field_i += 1
        c.acroForm.textfield(
            name="f%d" % self.field_i, tooltip=label,
            x=x, y=self.y - 5, width=w, height=17,
            borderWidth=0, forceBorder=False,
            fillColor=CREAM, textColor=INK, fontSize=10,
        )
        c.setStrokeColor(Color(0.75, 0.72, 0.66))
        c.setLineWidth(0.6)
        c.line(x, self.y - 5, x + w, self.y - 5)
        self.y -= gap

    def pair(self, l1, l2):
        """Two short fields on one row."""
        self.space(34)
        c = self.c
        half = CONTENT_W / 2 - 10
        for i, lab in enumerate((l1, l2)):
            bx = ML + i * (half + 20)
            c.setFillColor(INK)
            c.setFont("Helvetica", 9.8)
            c.drawString(bx, self.y, lab)
            lw = c.stringWidth(lab, "Helvetica", 9.8)
            x = bx + lw + 8
            w = half - lw - 8
            self.field_i += 1
            c.acroForm.textfield(
                name="f%d" % self.field_i, tooltip=lab,
                x=x, y=self.y - 5, width=w, height=17,
                borderWidth=0, forceBorder=False,
                fillColor=CREAM, textColor=INK, fontSize=10,
            )
            c.setStrokeColor(Color(0.75, 0.72, 0.66))
            c.setLineWidth(0.6)
            c.line(x, self.y - 5, x + w, self.y - 5)
        self.y -= 16.5

    def question(self, text):
        self.space(46)  # keep the question with its first row of answers
        self.c.setFillColor(INK)
        self.c.setFont("Helvetica-Bold", 9.8)
        self.c.drawString(ML, self.y, text)
        self.y -= 13

    def checks(self, options, per_row=3):
        c = self.c
        rows = [options[i:i + per_row] for i in range(0, len(options), per_row)]
        for row in rows:
            self.space(24)
            colw = CONTENT_W / per_row
            for i, opt in enumerate(row):
                x = ML + i * colw
                self.field_i += 1
                c.setStrokeColor(NAVY)
                c.setLineWidth(0.8)
                c.rect(x, self.y - 3, 11, 11, stroke=1, fill=0)
                c.acroForm.checkbox(
                    name="c%d" % self.field_i, tooltip=opt,
                    x=x, y=self.y - 3, size=11,
                    borderWidth=0.8, borderColor=NAVY,
                    fillColor=white, textColor=NAVY, checked=False,
                )
                c.setFillColor(INK)
                c.setFont("Helvetica", 9.6)
                c.drawString(x + 16, self.y, opt)
            self.y -= 15.5
        self.y -= 1

    def note(self, text):
        self.space(22)
        self.c.setFillColor(MUTED)
        self.c.setFont("Helvetica-Oblique", 9)
        self.c.drawString(ML, self.y, text)
        self.y -= 15

    def save(self):
        self.footer()
        self.c.save()


f = Form(OUT)

f.section("Your Information")
f.field("Full Name:")
f.pair("Date of Birth:", "Phone Number:")
f.field("Email (optional):")
f.field("Current Address / Where to reach you:")
f.pair("Emergency Contact Name:", "Their Phone Number:")

f.section("Military Service")
f.question("Branch of Service:")
f.checks(["Army", "Navy", "Air Force", "Marine Corps", "Coast Guard", "Space Force"], per_row=3)
f.pair("Service Dates — From:", "To:")
f.question("Discharge Type:")
f.checks(["Honorable", "Other", "Not sure"], per_row=3)
f.question("Do you have your DD-214 (discharge papers)?")
f.checks(["Yes", "No", "Not sure"], per_row=3)
f.note("No worries if you don't have it on hand — we can help you request a copy.")

f.section("Current Housing")
f.question("Where are you staying right now?")
f.checks(["No stable housing", "Staying with family/friends", "Shelter",
          "Motel/hotel", "Renting", "Own home", "Transitional housing"], per_row=2)
f.field("How long have you been there?:")
f.field("What's bringing you in today?:")

f.section("VA Health Care & Benefits")
f.question("Enrolled in VA health care?")
f.checks(["Yes", "No", "Not sure"], per_row=3)
f.question("Currently receiving any VA benefits?")
f.checks(["Yes", "No", "Not sure"], per_row=3)
f.field("Case Manager Name & Phone (if you have one):")
f.pair("Signature:", "Date:")
f.note("We'll go over the details of your benefits together — you don't need paperwork for this step.")

f.save()
print("wrote", OUT, "pages:", f.n)
