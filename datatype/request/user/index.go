package user

type Account struct {
  Mail     string
  Name     string
  Phone    string
  Password string
}

type Friend struct {
  UserID   int
  FriendID int
}

type Profile struct {
  UserID      int
  FriendID    int
  Name        interface{}
  Avatar      interface{}
  Gender      interface{}
  Birth       interface{}
  Phone       interface{}
  Description interface{}
}

type Search struct {
  UserID  int
  Keyword string
}

