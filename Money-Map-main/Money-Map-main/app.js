const form = document.getElementById("budget-form");
const resultBox = document.getElementById("result-box");
const totalExpensesResult = document.getElementById("total-expenses-result");
const remainingIncomeResult = document.getElementById(
  "remaining-income-result"
);

form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get income and expense values
  const income = parseFloat(document.getElementById("income").value);
  const housing = parseFloat(document.getElementById("housing").value);
  const transportation = parseFloat(
    document.getElementById("transportation").value
  );
  const food = parseFloat(document.getElementById("food").value);
  const entertainment = parseFloat(
    document.getElementById("entertainment").value
  );
  const personalCare = parseFloat(
    document.getElementById("personalCare").value
  );
  const extras = parseFloat(document.getElementById("extras").value);

  // Calculate overall spending
  const totalExpenses =
    housing + transportation + food + entertainment + personalCare + extras;
  const remainingIncome = income - totalExpenses;

  // Display results in rupees with formatting
  totalExpensesResult.textContent = totalExpenses
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  remainingIncomeResult.textContent = remainingIncome
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  resultBox.style.display = "block"; // Show the results box

  // Call showModal when needed
  showModal("Calculation completed successfully!");
});

// Add this function to show modal
function showModal(message) {
  document.getElementById("modal-message").textContent = message;
  const modal = new bootstrap.Modal(
    document.getElementById("notificationModal")
  );
  modal.show();
}
