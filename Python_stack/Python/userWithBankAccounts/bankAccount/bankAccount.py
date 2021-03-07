
class BankAccount:
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        x = self.balance + amount
        print(x)
        return self

    def withdraw(self, amount):
        # x = self.balance - amount
        # print(x)
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


account1 = BankAccount(0.07, 100)
account2 = BankAccount(0.25, 300)


account1.deposit(100).deposit(200).deposit(100).withdraw(
    100).yield_interest().display_account_info()
account2.deposit(100).deposit(200).withdraw(50).withdraw(75).withdraw(
    100).withdraw(25).yield_interest().display_account_info()

# account1.yield_interest()
# account1.display_account_info()

# # account1.withdraw(101)
# account1.yield_interest()
