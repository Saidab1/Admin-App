const headers = { "Content-Type": "application/json" };

export async function getEmployees() {
  const response = await fetch(`http://localhost:3000/employees`, {
    headers: {
      ...headers,
    },
  });

  return await response.json();
}

export async function getEmployeeById(_, employeeId) {
  const response = await fetch(
    `http://localhost:3000/employees/${employeeId}`,
    {
      headers: {
        ...headers,
      },
    }
  );
  return await response.json();
}

export async function getIncomes() {
  const response = await fetch(`http://localhost:3000/incomes`, {
    headers: {
      ...headers,
    },
  });
  return response.json();
}

export async function getExpenses() {
  const response = await fetch(`http://localhost:3000/expenses`, {
    headers: {
      ...headers,
    },
  });
  return response.json();
}


export async function getCashFlowData() {
  const response = await fetch(`http://localhost:3000/cashflows`, {
    headers: {
      ...headers,
    },
  });
  return response.json();
}