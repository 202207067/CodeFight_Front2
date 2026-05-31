const practiceExercises = [
  {
    id: 'MC01',
    title: '기본 출력',
    question: '콘솔에 텍스트를 출력하는 JAVA 함수는?',
    options: ['System.out.println', 'Scanner', 'int', 'String'],
    correctIndex: 0,
    explanation: 'System.out.println()은 JAVA의 표준 출력 함수입니다.'
  },
  {
    id: 'MC02',
    title: '변수 선언',
    question: '정수형 변수를 선언할 때 JAVA에서 사용하는 키워드는?',
    options: ['int', 'float', 'double', 'char'],
    correctIndex: 0,
    explanation: 'int는 정수(integer)를 나타내는 타입 키워드입니다.'
  },
  {
    id: 'MC03',
    title: 'for 반복문',
    question: 'JAVA에서 for 반복문의 카운터 변수에 사용하는 타입은?',
    options: ['int', 'for', 'loop', 'count'],
    correctIndex: 0,
    explanation: 'for(int i = 0; ...)처럼 int 타입을 사용합니다.'
  },
  {
    id: 'MC04',
    title: 'if 조건문',
    question: '조건을 검사하는 예약어는?',
    options: ['if', 'when', 'check', 'cond'],
    correctIndex: 0,
    explanation: 'if는 조건문을 시작하는 키워드입니다.'
  },
  {
    id: 'MC05',
    title: '메인 함수',
    question: 'JAVA 프로그램의 시작점인 메인 함수 선언은?',
    options: ['public static void main', 'static void main', 'public void main', 'void main'],
    correctIndex: 0,
    explanation: 'JAVA에서는 public static void main(String[] args)가 진입점입니다.'
  },
  {
    id: 'MC06',
    title: '주석',
    question: 'JAVA에서 한 줄 주석을 작성하는 기호는?',
    options: ['//', '/*', '#', '--'],
    correctIndex: 0,
    explanation: '//는 한 줄 주석, /* */는 여러 줄 주석입니다.'
  },
  {
    id: 'MC07',
    title: '논리 연산자 AND',
    question: '두 조건이 모두 참일 때를 나타내는 JAVA 논리 연산자는?',
    options: ['&&', '||', '!', '&'],
    correctIndex: 0,
    explanation: '&&는 논리곱(AND), ||는 논리합(OR)입니다.'
  },
  {
    id: 'MC08',
    title: '배열 선언',
    question: 'JAVA에서 정수 배열을 선언하는 키워드는?',
    options: ['int[]', 'array', 'Array', 'int<>'],
    correctIndex: 0,
    explanation: 'int[] arr = new int[5];처럼 사용합니다.'
  },
  {
    id: 'MC09',
    title: '반환문',
    question: '메소드에서 값을 반환할 때 사용하는 키워드는?',
    options: ['return', 'break', 'continue', 'yield'],
    correctIndex: 0,
    explanation: 'return은 함수의 결과를 호출자에게 돌려줍니다.'
  },
  {
    id: 'MC10',
    title: '증가 연산자',
    question: '변수의 값을 1 증가시키는 JAVA 연산자는?',
    options: ['++', '--', '+=', '+1'],
    correctIndex: 0,
    explanation: '++는 1 증가, --는 1 감소 연산자입니다.'
  },
  {
    id: 'MC11',
    title: '문자열 타입',
    question: 'JAVA에서 문자열을 나타내는 클래스는?',
    options: ['String', 'string', 'str', 'CharSequence'],
    correctIndex: 0,
    explanation: 'JAVA에서는 대문자 S로 시작하는 String 클래스를 사용합니다.'
  },
  {
    id: 'MC12',
    title: 'while 반복문',
    question: '조건이 참인 동안 반복하는 JAVA 키워드는?',
    options: ['while', 'do', 'repeat', 'loop'],
    correctIndex: 0,
    explanation: 'while(조건) { ... } 형태로 사용합니다.'
  },
  {
    id: 'MC13',
    title: '배열 길이',
    question: 'JAVA 배열의 길이를 나타내는 속성은?',
    options: ['length', 'size()', 'count', 'len'],
    correctIndex: 0,
    explanation: '배열은 .length, 문자열은 .length()를 사용합니다.'
  },
  {
    id: 'MC14',
    title: '메소드 정의',
    question: 'JAVA에서 클래스 이름으로 직접 호출할 수 있는 메소드 키워드는?',
    options: ['static', 'final', 'abstract', 'public'],
    correctIndex: 0,
    explanation: 'static 메소드는 객체 생성 없이 클래스명으로 호출할 수 있습니다.'
  },
  {
    id: 'MC15',
    title: '문자열 길이',
    question: 'JAVA String의 길이를 구하는 메소드는?',
    options: ['length()', 'size()', 'getLength()', 'count()'],
    correctIndex: 0,
    explanation: '문자열은 .length() 메소드를 사용합니다.'
  },
  {
    id: 'MC16',
    title: '예외 처리',
    question: 'JAVA에서 예외가 발생할 수 있는 코드를 감싸는 블록은?',
    options: ['try', 'catch', 'throw', 'finally'],
    correctIndex: 0,
    explanation: 'try { ... } catch(Exception e) { ... } 형태로 사용합니다.'
  },
  {
    id: 'MC17',
    title: '클래스 선언',
    question: 'JAVA에서 클래스를 선언하는 키워드는?',
    options: ['class', 'struct', 'interface', 'enum'],
    correctIndex: 0,
    explanation: 'class는 객체 지향 프로그래밍의 기본 단위입니다.'
  },
  {
    id: 'MC18',
    title: '객체 생성',
    question: 'JAVA에서 새로운 객체를 생성하는 키워드는?',
    options: ['new', 'create', 'make', 'instance'],
    correctIndex: 0,
    explanation: 'new Person()처럼 사용하여 힙 메모리에 객체를 할당합니다.'
  },
  {
    id: 'MC19',
    title: '상속',
    question: 'JAVA에서 클래스가 다른 클래스를 상속받을 때 사용하는 키워드는?',
    options: ['extends', 'implements', 'inherits', 'super'],
    correctIndex: 0,
    explanation: 'class Student extends Person { ... }처럼 사용합니다.'
  },
  {
    id: 'MC20',
    title: '문자열 비교',
    question: 'JAVA에서 두 문자열의 내용이 같은지 비교하는 메소드는?',
    options: ['equals', '==', 'compareTo', 'same'],
    correctIndex: 0,
    explanation: '==는 주소 비교, .equals()는 내용 비교입니다.'
  },
  {
    id: 'MC21',
    title: '형변환',
    question: 'JAVA에서 문자열을 정수로 변환하는 메소드는?',
    options: ['Integer.parseInt', 'int.parse', 'String.toInt', 'parseInt'],
    correctIndex: 0,
    explanation: 'Integer.parseInt("123")은 문자열 "123"을 정수 123으로 변환합니다.'
  },
  {
    id: 'MC22',
    title: 'null 체크',
    question: 'JAVA에서 참조가 null인지 비교하는 연산자는?',
    options: ['==', 'equals', 'isNull', '== null'],
    correctIndex: 0,
    explanation: '==는 참조(주소) 비교에 사용됩니다.'
  },
  {
    id: 'MC23',
    title: '배열 정렬',
    question: 'JAVA에서 배열을 오름차순으로 정렬하는 클래스 메소드는?',
    options: ['Arrays.sort', 'Array.sort', 'Collections.sort', 'Sort.array'],
    correctIndex: 0,
    explanation: 'Arrays.sort(arr)는 기본형 배열을 오름차순 정렬합니다.'
  },
  {
    id: 'MC24',
    title: '최대값',
    question: 'JAVA에서 두 수의 최대값을 구하는 메소드는?',
    options: ['Math.max', 'Math.maximum', 'Max.get', 'Math.min'],
    correctIndex: 0,
    explanation: 'Math.max(a, b)는 a와 b 중 큰 값을 반환합니다.'
  },
  {
    id: 'MC25',
    title: '재귀 함수',
    question: 'JAVA 재귀 호출에서 결과를 반환하는 키워드는?',
    options: ['return', 'recurse', 'call', 'back'],
    correctIndex: 0,
    explanation: '재귀 함수에서도 return을 사용하여 결과를 돌려줍니다.'
  },
  {
    id: 'MC26',
    title: '인터페이스',
    question: 'JAVA에서 인터페이스를 선언하는 키워드는?',
    options: ['interface', 'abstract', 'implements', 'protocol'],
    correctIndex: 0,
    explanation: 'interface는 추상 메소드와 상수만 가질 수 있는 타입입니다.'
  },
  {
    id: 'MC27',
    title: '제네릭',
    question: 'JAVA에서 제네릭 정수 리스트의 타입 매개변수는?',
    options: ['Integer', 'int', 'Double', 'Float'],
    correctIndex: 0,
    explanation: 'List<Integer>에서 Integer는 int의 Wrapper 클래스입니다.'
  },
  {
    id: 'MC28',
    title: '람다식',
    question: 'JAVA에서 람다식의 화살표 기호는?',
    options: ['->', '=>', '::', '~>'],
    correctIndex: 0,
    explanation: '(x) -> x * 2처럼 사용합니다. C++은 [&](int x){}를 사용합니다.'
  },
  {
    id: 'MC29',
    title: '스레드',
    question: 'JAVA에서 스레드를 시작하는 메소드는?',
    options: ['start', 'run', 'begin', 'execute'],
    correctIndex: 0,
    explanation: 'thread.start()는 새 스레드를 생성하고 run()을 호출합니다.'
  },
  {
    id: 'MC30',
    title: '싱글톤',
    question: 'JAVA 싱글톤의 getInstance() 메소드에 붙는 키워드는?',
    options: ['static', 'final', 'public', 'private'],
    correctIndex: 0,
    explanation: 'getInstance()는 static으로 선언되어 클래스명으로 호출됩니다.'
  }
];