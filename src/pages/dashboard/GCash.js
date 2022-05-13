import React from "react";
import style from "../../styles/Payment.module.css";

const GCash = () => {
  const uploadImage = (async) => {
    var fileInput = document.getElementById("file");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpeg|\.jpg|\.png)$/i;
    if (!allowedExtensions.exec(filePath)) {
      alert("Upload a file! (.jpeg/.jpg/.png)");
      fileInput.value = "";
      return false;
    } else {
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("imagePreview").innerHTML = '<img src>="' + e.target.result + '" />';
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    }
  };

  return (
    <div>
      {/* ---- NAV Bar ---- */}
      <div className={style.gcash_credit_nav}>
        <nav>
          <img src={"/assets/images/gcash_logo.png"} className={style.gcash_logo} alt="GCash logo" />
        </nav>
      </div>
      <form className={style.gcash_form}>
        {/* ---- GCASH ---- */}
        <div class="card" className={style.cashtransfer}>
          <div className={style.gcash}>
            <div className={style.upperinputbox}>
              <label>Hover and scan</label>
              <div className={style.qrcode}></div>
            </div>
            <div className={style.lowerinputbox}>
              <label className={style.label}>Upload Reciept</label>
              <input className={style.uploads} type="file" onChange={uploadImage} />
              <input className={style.submit__btn} type="submit" name="submit" value="Submit" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GCash;
