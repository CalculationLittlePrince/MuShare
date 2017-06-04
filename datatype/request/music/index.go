package music

type Sheet struct {
  UserID     int
  Name       string
  UpdateName string
  Privilege  string
  Cover      string
  ToID       int
}

type Audio struct {
  UserID   int
  Name     string
  Duration int
  AudioUrl string
  Artist   string
  ArtistID int
  SheetID  int
}

type SheetMigration struct {
  UserID    int
  IdList    []int
  ToSheetId int
}

type Artist struct {
  UserID int
  Name   string
}