  let people = 1;
  const number = parseInt(prompt('몇 명이 참가하나요?'), 10); //뒤의 10은 10진법임음 알려주기 위해 작성

  const $w = document.querySelector('#textForm');

  let word;    //제시어
  let newWord; //새로 입력한 단어

  let $people = document.getElementById('order');
  let $givenWord = document.getElementById('word');
  let confirm = false;
//------------------------------------------------------------------------------
  //입력 단어 담는 함수
  const onInput = (event) =>{
    newWord = event.target.value;
  };

  //초기화 함수
  const reset = () =>{
    document.getElementById('textForm').value = "";
    newWord = "";
  }

  //참가자 번호
  const participations = () => {
    if(people < number){
      people ++;
      $people.innerText = people;
    }else{
      people = 1;
      $people.innerText = people;
    }
  }

  //변수안에 클릭 함수 만들기
  const onClickButton = () =>{
    if(!word){
      //값이 비어있다. == 입력한 단어(newWord)가 제시어가 된다.
      word = $w.value;
      $givenWord.innerText = word;
      participations();
      reset();
    }else{
      //값이 비어있지 않다.
      /** 입력한 단어가 올바른 단어인지 확인해야한다.*/
      if(word.charAt(word.length-1) === newWord.charAt(0))
      {
        word = newWord;
        console.log('다음 사람 진행 GOGO');
        $givenWord.innerText = word;
        participations();
        reset();

      }else{
        confirm = window.confirm('게임이 종료되었습니다. 다시 시작하시겠습니까?');
        if(confirm == true){
          window.location.reload();
        }
        console.log('게임 종료 lose');
      }
    }
  };

  document.getElementById('textForm').addEventListener('input', onInput);
  document.getElementById('button_1').addEventListener('click', onClickButton);
