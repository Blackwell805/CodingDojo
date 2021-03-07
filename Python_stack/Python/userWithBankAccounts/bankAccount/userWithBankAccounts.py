
class User:
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0, balance=0)

    def deposit(self, amount):
        self.account .deposit()
        return self

    def withdrawal(self, amount):
        self.account .withdraw()
        return self

    def display_user_balance(self):
        self.account.display_account_info()


class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        x = self.balance + amount
        print(x)
        return self

    def withdraw(self, amount):
        if (self.balance < amount):
            self.balance -= 5
            print(
                "Insufficient funds: Charging a $5 fee, your new balance is ", self.balance)
        return self

    def display_account_info(self):
        print("Balance", self.balance, "Interest Rate", self.int_rate)
        return self

    def yield_interest(self):
        x = self.balance*self.int_rate
        x += self.balance
        print(x)
        return self


Austin = User("Austin", "awb@yo.com")

Austin.display_user_balance()
