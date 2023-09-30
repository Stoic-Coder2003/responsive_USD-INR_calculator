function convert() {
    const val = document.querySelector(".value-box").value; // Use value instead of innerHTML for input
    let new_val = 0;

    // Assuming you want to convert INR to USD (80 INR = 1 USD)
    new_val = val / 80;

    document.querySelector(".output-window").innerHTML = `USD ${new_val}`;
}
