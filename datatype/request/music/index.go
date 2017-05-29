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
  UserID     int
  Name       string
  AudioUrl   string
  ImageUrl   string
  Artist     string
  ArtistID   int
  ArtistName int
  SheetID    int
}

type SheetMigration struct {
  UserID    int
  IdList    []int
  ToSheetId int
}