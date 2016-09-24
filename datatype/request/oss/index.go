package oss

type OSS struct {
  UserID int
}

type OSSAudioCallback struct {
  Bucket   string
  Object   string
  AudioID  string
  UserID   int
  MimeType string
  Token    string
}

type OSSAvatarCallback struct {
  Bucket   string
  Object   string
  UserID   int
  MimeType string
  Token    string
}