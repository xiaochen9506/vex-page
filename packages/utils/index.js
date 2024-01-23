import { ElMessage } from 'element-plus'

// 拷贝
export const copy = (text) => {
  if (navigator.clipboard) {
    // clipboard api 复制
    navigator.clipboard.writeText(text);
    ElMessage.success('拷贝成功')
  } else {
    const textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    // 赋值
    textarea.value = text;
    // 选中
    textarea.select();
    // 复制
    document.execCommand('copy', true);
    // 移除输入框
    document.body.removeChild(textarea);
    ElMessage.success('拷贝成功')
  }
}
