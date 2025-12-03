const user = {
  userId: "U001",
  username: "Alice",
  accountType: "Premium",
  loginDetails: "2025-12-01 10:15",
  coinBalance: 1200
};

const viewUserData = [
  { label: "User ID", value: user.userId },
  { label: "Username", value: user.username },
  { label: "Account Type", value: user.accountType },
  { label: "Login Details", value: user.loginDetails },
  { label: "Coin Balance", value: user.coinBalance }
];

export default viewUserData;