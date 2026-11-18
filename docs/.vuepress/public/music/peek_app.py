from pathlib import Path
import re
a = Path('app.js').read_text(encoding='utf-8')
print('app.js term mentions:', a.count('term'), 'len', len(a))
for pat in ['data-definition','glossary','term']:
    print(pat, a.count(pat))
# 术语索引页
idx = Path('index/index.html')
print('index exists', idx.exists())
if idx.exists():
    t=idx.read_text(encoding='utf-8')
    print('definition count in index:', t.count('data-definition'))
