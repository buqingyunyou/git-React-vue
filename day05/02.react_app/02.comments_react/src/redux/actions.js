// 添加评论的action方法
export function addComment(comment) {
  return {
    type: "ADD_COMMENT",
    data: comment,
  };
}

export function removeComment(key){
  return{
    type:"REMOVE_COMMENT",
    data:key,
  }
}


