var jsPsych = initJsPsych({
  on_finish: function() {
    jsPsych.data.displayData(); // 实验结束显示数据
  }
});

// 欢迎页面
var welcome = {
  type: "html-button-response",
  stimulus: "<h1>欢迎参加实验！</h1><p>点击开始进入实验。</p>",
  choices: ["开始"]
};

// 全屏指令
var fullscreen = {
  type: 'fullscreen',
  message: '<p>请切换到全屏模式以进行实验。</p>',
  button_label: '进入全屏',
  fullscreen_mode: true
};

// 实验流程
jsPsych.run([welcome, fullscreen]);

