document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.getElementById("faq-container");
  if (faqContainer) {
    fetch("data/qanda.json")
      .then(res => res.json())
      .then(data => {
        faqContainer.innerHTML = "";
        data.forEach(item => {
          const q = document.createElement("div");
          q.classList.add("faq-item");
          q.innerHTML = `<strong>Q: ${item.question}</strong>
                         <div class="answer">A: ${item.answer}</div>`;
          q.addEventListener("click", () => {
            const a = q.querySelector(".answer");
            a.style.display = a.style.display === "block" ? "none" : "block";
          });
          faqContainer.appendChild(q);
        });
      })
      .catch(() => faqContainer.textContent = "読み込みに失敗しました。");
  }
});


