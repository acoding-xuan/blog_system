<template>
  <div class="footer">
    <div class="foot">
      <ul style="width:1000px;margin-left: 450px;">
        <li>Copyright 2022 古月|</li>
        <li><a href="https://beian.miit.gov.cn/">
          |豫ICP备2023002961号</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer.vue"
}
</script>
<style>
.footer {
margin: 0px;
padding: 0px;
width: 100%;
height: auto;
background-color: #eeeeee;
}

.foot {
padding: 0px;
width: 1340px;
height: 45px;
margin: 0 auto;
overflow: hidden;
}

.foot ul {
padding: 0;
list-style: none;
width: 1000px;
margin: 0 0 0 250px;
}

.foot ul li{
margin: 0;
color: #1f1e1e;
font-size: 15px;
float: left;
list-style: none;
padding: 15px 0px 0px 17px;
}

</style>
