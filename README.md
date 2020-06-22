# automate EPBM (2020's 1st Term academic year edition)
automate your IPB 2020 EPBM filling in a fraction of second with javascript!

Based on William Hanugra's autoepbm, a small js code for automatic form filling in Evaluasi Penyelenggaraan Proses Belajar Mengajar (EPBM). The Code using in this repo was Re-Newed by Me . For more information see https://github.com/williamhanugra/epbm-hack

How to use ?
------------

* Login to EPBM, https://simak.ipb.ac.id/EPBMOnline/EPBM.
* Pick a course.
* Open javascript console : Chrome (ctrl+shift+j), Firefox (ctrl+shift+k)
* Copy this code 

```javascript
const autoEPBM = (choices) => {
    var dosen_appearance  = document.querySelectorAll('.panel-heading')
    const jumlah_dosen = dosen_appearance.length

    const zeroPad = (num) =>{
        return num.toString().padStart(3,"0")
    }
        
    num_start=70
    for(i = 1 ; i<=16; i++){
        target = '#JawabanMK_19'+ zeroPad(num_start+choices) 
        num_start+=10
        $(target).prop("checked", true)
    }
    
    for(no_dosen =1 ; no_dosen <= jumlah_dosen; no_dosen ++){
        num_start = 72
        for (no_pertanyaan=1 ; no_pertanyaan<=14 ; no_pertanyaan++){
            target = '#JawabanDosen_' + no_dosen.toString() +  no_pertanyaan.toString() + '19' + num_start.toString() + choices.toString()
            num_start+=1
            $(target).prop("checked", true)
        }
    }

    $('#Pernyataan').prop('checked', true)
}
```
* paste to the console, click enter
* pick your 'rating' for the lecturer

| rating        |value                                  |
| :------------:|:-------------------------------------:|
| 1             | Sangat Tidak Setuju atau Tidak Setuju |
| 2             | Tidak Setuju                          |
| 3             | Setuju                                |
| 4             | Sangat Setuju                         |

* type `autoEPBM(evaluation)`, example: `autoEPBM(3)`
* hit enter, and you are done!



Disclaimer
==========

Any actions and or activities related to the material contained within this repository is solely your responsibility.The misuse of the information in this repository can result in criminal charges brought against the persons in question. The authors will not be held responsible in the event any criminal charges be brought against any individuals misusing the information in this repository to break the law.
