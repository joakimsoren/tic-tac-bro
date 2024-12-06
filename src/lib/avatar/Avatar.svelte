<script>
  import SpeechBubble from "./SpeechBubble.svelte";
</script>

<div class="avatar-container">
  <SpeechBubble message="You suck"/>
  <div class="avatar">
    <div class="head">
      <div class="eye-line">
        <div class="eye"></div>
        <div class="eye"></div>
      </div>
      <div class="mouth"></div>
    </div>
    <div class="body"></div>
  </div>
</div>

<style>
  .avatar-container{
    position: relative;
  }
  .avatar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .head {
    width:100px;
    height:100px;
    background-color: #ffe29d;
    border-radius: 50%;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .eye-line{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }
  .eye{
    width: 20px;
    height: 20px;
    background-color: black;
    border-radius: 50%;
  }
  .mouth{
    width: 40px;
    height: 10px;
    background-color: rgb(247, 1, 1);
    border-radius: 50%;
    align-self: center;
  }
  .body{
    width: 200px;
    height: 200px;
    background-color: #001eff;
    border-radius: 50%;
  }
</style>