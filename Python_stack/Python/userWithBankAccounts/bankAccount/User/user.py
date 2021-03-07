class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
        # adding the deposit method

    def make_deposit(self, amount):  # takes an argument that is the amount of the deposit
        # the specific user's account increases by the amount of the value received
        self.account_balance += amount

    def make_withdrawal(self, amount):
        self.account_balance -= amount

    def display_user_balance(self):
        print(self.account_balance)

    def transfer(self, amount, other):
        self.account_balance -= amount
        other.account_balance += amount


user1 = User("Austin", "awb@yo.com")
user2 = User("Alayne", "abb@yo.com")
user3 = User("Bruce", "bab@yo.com")

user1.make_deposit(100)
user1.make_deposit(200)
user1.make_deposit(300)
user1.make_withdrawal(200)
print(user1.account_balance)

user2.make_deposit(500)
user2.make_deposit(200)
user2.make_withdrawal(100)
user2.make_withdrawal(100)
print(user2.account_balance)

user3.make_deposit(100)
user3.make_withdrawal(25)
user3.make_withdrawal(25)
user3.make_withdrawal(25)
print(user3.account_balance)

user1.transfer(100, user3)
print(user1.account_balance, user3.account_balance)
