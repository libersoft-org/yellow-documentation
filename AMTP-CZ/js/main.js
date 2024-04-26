let toc;
let doc;
let resizer;
let isResizing = false;

function getTocItem(container, item, level) {
 const entry = document.createElement('div');
 entry.className = 'item';
 entry.style.paddingLeft = `calc(10px + ${level * 20}px`;
 entry.onclick = () => {
  for (t of document.querySelectorAll('#toc .item')) if (t.classList.contains('active')) t.classList.remove('active');
  entry.classList.add('active');
  location.href = '#' + item.link;
 }
 const title = document.createElement('span');
 title.textContent = item.title;
 const toggle = document.createElement('span');
 toggle.className = 'toggle';
 if (item.sub && item.sub.length > 0) {
  toggle.textContent = '▼';
  toggle.onclick = (event) => {
   event.stopPropagation();
   if (subContainer) {
    subContainer.classList.toggle('hidden');
    toggle.textContent = subContainer.classList.contains('hidden') ? '▶' : '▼';
   }
  };
 } else toggle.style.display = 'none';
 const subContainer = document.createElement('div');
 entry.appendChild(title);
 entry.appendChild(toggle);
 container.appendChild(entry);
 container.appendChild(subContainer);
 if (item.sub) item.sub.forEach((subItem) => { getTocItem(subContainer, subItem, level + 1); });
}

function syntaxHighlight(jsonString) {
 return jsonString.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*(?:[eE][+-]?\d+)?)?|\/\/.*$)/gm, function (match) {
  let cls = 'number';
  if (/^"/.test(match)) {
   if (/:$/.test(match)) cls = 'key';
   else cls = 'string';
  } else if (/true|false/.test(match)) cls = 'boolean';
  else if (/null/.test(match)) cls = 'null';
  else if (/\/\/.*$/.test(match)) {
   cls = 'comment';
   return '<span class="' + cls + '">' + match + '</span>';
  }
  return '<span class="' + cls + '">' + match + '</span>';
 });
}

function menu() {
 toc.classList.toggle('toc-hidden');
 doc.classList.toggle('doc-hidden');
 doc.style = '';
}

document.addEventListener("DOMContentLoaded", function() {
 toc = document.querySelector('#toc');
 doc = document.querySelector('#doc');
 resizer = document.querySelector('#resizer');
 data.forEach((item) => { getTocItem(toc, item, 0); });
 const pres = document.querySelectorAll('pre');
 pres.forEach(pre => {
  const textContent = pre.textContent.trim();
  try {
   pre.innerHTML = syntaxHighlight(textContent);
  } catch (e) {
   console.error("Error processing JSON", e.message);
  }
 });

 resizer.addEventListener('mousedown', function(e) {
  isResizing = true;
  document.body.style.userSelect = 'none';
  toc.style.transitionDuration = '0s';
  doc.style.transitionDuration = '0s';
 });
 document.addEventListener('mousemove', function(e) {
  if (!isResizing) return;
  let newSize = e.clientX - 20;
  if (newSize < 300) newSize = 300;
  if (newSize > 700) newSize = 700;
  newSize += 'px';
  document.documentElement.style.setProperty('--toc-size', newSize);
 });
 document.addEventListener('mouseup', function(e) {
  isResizing = false;
  document.body.style.userSelect = '';
  toc.style.removeProperty('transition');
  doc.style.removeProperty('transition');
 });
});
