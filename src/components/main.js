import Button from '@mui/material/Button';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import SimpleBar from "simplebar-react";

export default function MainContent(){
  function analyse_buttonClick(){
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSdDXOrxNPuRsOAWB7DYtjoemw2w3tTmmKZA7nCEIj0nEotVpA/viewform';
  }
  return(
    <div id="MainContent" class="text-center">
      <div>
        <p>こちらをクリックで性格診断を行うgoogleformへ遷移できます</p>
      </div>
      <Button onClick={analyse_buttonClick} class="analys_buttun" variant="contained" color="primary">
      性格診断
      </Button>
      {/* <p class="text_link"><a href="https://docs.google.com/forms/d/e/1FAIpQLSdDXOrxNPuRsOAWB7DYtjoemw2w3tTmmKZA7nCEIj0nEotVpA/viewform">性格診断はこちら！</a></p> */}
    </div>
  )
}

<script>

</script>
// classname="analys_buttun"
