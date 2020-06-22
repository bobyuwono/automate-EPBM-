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