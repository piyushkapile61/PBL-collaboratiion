// function spinWheel() {
//   const wheel = document.getElementById("spinWheelImage");
//   const result = document.getElementById("spinResult");
//   const spinSound = document.getElementById("spinSound");
//   const rewards = ["₹100 Off", "Free Accessory", "Mystery Box", "Extra Spin", "50% Off", "Free Delivery"];
//   const angle = Math.floor(Math.random() * 360 + 720); // 2+ full rotations

//   // Play sound
//   spinSound.play();

//   // Spin animation
//   wheel.style.transform = `rotate(${angle}deg)`;

//   // Delay reward reveal
//   setTimeout(() => {
//     const index = Math.floor(((angle % 360) / (360 / rewards.length))) % rewards.length;
//     result.textContent = `🎉 You won: ${rewards[index]}!`;

//     // Trigger confetti
//     confetti({
//       particleCount: 100,
//       spread: 70,
//       origin: { y: 0.6 }
//     });
//   }, 12000);
// }
function spinWheel() {
  const wheel = document.getElementById("spinWheelImage");
  const result = document.getElementById("spinResult");
  const spinSound = document.getElementById("spinSound");
  const rewards = ["₹100 Off", "Free Accessory", "Mystery Box", "Extra Spin", "50% Off", "Free Delivery"];

  // Random full spins (2 to 5 rotations)
  const extraSpins = Math.floor(Math.random() * 4) + 2; // 2, 3, 4, or 5
  const finalAngle = Math.floor(Math.random() * 360);   // random stop angle
  const angle = (extraSpins * 360) + finalAngle;

  // Play sound
  spinSound.play();

  // Spin animation
  wheel.style.transition = "transform 5s ease-out"; // smooth spin
  wheel.style.transform = `rotate(${angle}deg)`;

  // Delay reward reveal (same as transition time)
  setTimeout(() => {
    const index = Math.floor(finalAngle / (360 / rewards.length));
    result.textContent = `🎉 You won: ${rewards[index]}!`;

    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, 5000);
}
