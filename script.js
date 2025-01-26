let budget = document.getElementById('budget');
let bTable = document.getElementById('budget-table');
let pTable = document.getElementById('product-table');
let pName = document.getElementById('productName');
let productCost = document.getElementById('productCost');


let btn = document.getElementById('set').addEventListener('click', function () {
  bTable.innerHTML = `
    <td>${budget.value}</td>
    <td id='expence'>0</td>
    <td id='balance'>${budget.value}</td>
    `;
});

let cAmount = document.getElementById('cAmount').addEventListener('click', function () {
  let expences = document.getElementById('expence');
  let balance = document.getElementById('balance');

  let pCost = parseFloat(productCost.value);
  let budgetValue = parseFloat(budget.value);
  if (pCost > budgetValue) {
    alert('Product cost exceeds available budget!');
    return;
  }

  let tr = document.createElement('tr');
  tr.innerHTML = `
    <td class="pName">${pName.value}</td>
    <td class="Ammount">${productCost.value}</td>
    <td><button class="del">Delete</button></td>`;
  pTable.appendChild(tr);

  let newExpences = parseFloat(expences.innerHTML) + pCost;
  expences.innerHTML = newExpences;
  balance.innerHTML = budgetValue - newExpences;

  pName.value = '';
  productCost.value = '';

  let delBtn = tr.querySelector('.del');
  delBtn.addEventListener('click', function () {
    tr.remove();
    let curExAfterDel = parseFloat(expences.innerHTML) - pCost;
    expences.innerHTML = curExAfterDel;

    balance.innerHTML = budgetValue - curExAfterDel;
  });

});
