package oss

type OSS struct {
  UserID int
}

type OSSCallback struct {
  Bucket   string
  Object   string
  AudioID  string
  MimeType string
}