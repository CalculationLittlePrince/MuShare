import {getOssClient} from './oss';
import co from 'co';


function uploadAudio(objectKeyId, file, token, progress) {
  return getOssClient(token)
    .then(function (client) {
      return co(function*() {
        var checkpoint = null;
        for (var i = 0; i < 5; i++) {
          try {
            var result = yield client.multipartUpload(objectKeyId, file, {
              checkpoint: checkpoint,
              progress: function*(percentage, cpt) {
                console.log(percentage);
                checkpoint = cpt;
              }
            });
            console.log(result);
            return result;
          } catch (error) {
            console.log(error);
          }
        }
        throw new Error('Upload Failed');
      });
    })
}

function uploadToOss(objectKeyId, file, token, progress) {
  return getOssClient(token)
    .then(function (client) {
      return client.multipartUpload(objectKeyId, file, {
        progress: progress
      });
    })
}

export {uploadToOss, uploadAudio};
