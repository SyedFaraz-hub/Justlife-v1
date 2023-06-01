function showFrequencyModal(e) {
  var modal = document.getElementById("frequencyModal");
  var button = document.getElementById("frequencyButton");
  modal.style.display = "block";

  if (e == "change") {
    button.removeAttribute("onclick");
    button.setAttribute("onclick", "hideFrequencyModal()");
  }
}

function hideFrequencyModal() {
  var modal = document.getElementById("frequencyModal");
  modal.style.display = "none";
}

function showServiceModal() {
  var modal = document.getElementById("serviceModal");
  modal.style.display = "block";
}

function hideServiceModal() {
  var modal = document.getElementById("serviceModal");
  modal.style.display = "none";
}

function showPolicyModal() {
  var modal = document.getElementById("policyModal");
  modal.style.display = "block";
}

function hidePolicyModal() {
  var modal = document.getElementById("policyModal");
  modal.style.display = "none";
}
