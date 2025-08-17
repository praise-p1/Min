function blowCandles() {
  document.querySelectorAll('.candle').forEach(candle => {
    candle.classList.add("out");
  });
  alert("🎉 The candles are blown out! Happy Birthday 🎉");
}
