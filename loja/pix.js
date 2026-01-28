document.querySelector(".checkout-btn").addEventListener("click", async () => {
  const total = document.getElementById("total").innerText
    .replace(",", ".")
    .trim();

  if (!total || Number(total) <= 0) {
    alert("Carrinho vazio");
    return;
  }

  const res = await fetch("http://localhost:3001/create-pix", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ total })
  });

  const data = await res.json();

  document.getElementById("cartItems").innerHTML = `
    <p style="text-align:center;font-weight:bold">Pague com PIX</p>
    <img style="width:100%;max-width:240px;display:block;margin:10px auto"
         src="data:image/png;base64,${data.qr_code_base64}">
    <textarea style="width:100%;margin-top:10px" readonly>${data.qr_code}</textarea>
  `;
});
