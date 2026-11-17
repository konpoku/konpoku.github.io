import re
from pathlib import Path
# 找未改动的原始页面里 speech-bubble 的写法
for p in Path('quest').rglob('index.html'):
    t=p.read_text(encoding='utf-8')
    if 'speech-bubble' in t and 'chord-mv6' not in str(p) and 'chord-mv7' not in str(p) and 'chord-mv8' not in str(p):
        i=t.find('speech-bubble')
        print(p); print(t[max(0,i-300):i+400]); break
