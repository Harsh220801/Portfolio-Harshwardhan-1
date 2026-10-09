from pathlib import Path
import importlib.util

p = Path(r"C:\Users\HP\OneDrive\Desktop\Portfolio\Portfolio-Harshwardhan\assets\personalized\social\Resume.pdf")
print('exists:', p.exists())
print('size:', p.stat().st_size if p.exists() else 0)
for m in ['pypdf', 'PyPDF2', 'pdfplumber']:
    print(m, 'OK' if importlib.util.find_spec(m) else 'NO')
