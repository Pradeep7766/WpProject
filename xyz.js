const notes = [
    {
      title: "Python Notes",
      icon: "🐍",
      downloadLink: "https://www.google.com/python-notes.pdf",
      chapterwiseLink: "https://example.com/python-notes-chapters",
    },
    {
      title: "C Notes",
      icon: "C",
      downloadLink: "https://example.com/c-notes.pdf",
      chapterwiseLink: "https://example.com/c-notes-chapters",
    },
    {
      title: "Android Notes",
      icon: "🤖",
      downloadLink: "https://example.com/android-notes.pdf",
      chapterwiseLink: "https://example.com/android-notes-chapters",
    },
    {
      title: "Java Notes",
      icon: "☕",
      downloadLink: "https://example.com/java-notes.pdf",
      chapterwiseLink: "https://example.com/java-notes-chapters",
    },
    {
      title: "HTML Notes",
      icon: "HTML5",
      downloadLink: "https://example.com/html-notes.pdf",
      chapterwiseLink: "https://example.com/html-notes-chapters",
    },
    {
      title: "CSS Notes",
      icon: "CSS3",
      downloadLink: "https://example.com/css-notes.pdf",
      chapterwiseLink: "https://example.com/css-notes-chapters",
    },
    {
      title: "DSA Notes",
      icon: "📊",
      downloadLink: "https://example.com/dsa-notes.pdf",
      chapterwiseLink: "https://example.com/dsa-notes-chapters",
    },
    {
      title: "Javascript Notes",
      icon: "JS",
      downloadLink: "https://example.com/javascript-notes.pdf",
      chapterwiseLink: "https://example.com/javascript-notes-chapters",
    },
  ];
  
  const notesContainer = document.getElementById("notes-container");
  
  notes.forEach((note) => {
    const noteElement = document.createElement("div");
    noteElement.classList.add("note");
  
    const iconElement = document.createElement("div");
    iconElement.classList.add("note-icon");
    iconElement.textContent = note.icon;
  
    const titleElement = document.createElement("h2");
    titleElement.textContent = note.title;
  
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "PDF Notes";
    downloadButton.addEventListener("click", () => {
      window.location.href = note.downloadLink;
    });
  
    const chapterwiseButton = document.createElement("button");
    chapterwiseButton.textContent = "Chapterwise Notes";
    chapterwiseButton.addEventListener("click", () => {
      window.location.href = note.chapterwiseLink;
    });
  
    noteElement.appendChild(iconElement);
    noteElement.appendChild(titleElement);
    noteElement.appendChild(downloadButton);
    noteElement.appendChild(chapterwiseButton);
  
    notesContainer.appendChild(noteElement);
  });