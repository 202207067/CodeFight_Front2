const problems = {
  '쉬움': [
    { id:'FB_E01', type:'fill_blank', title:'배열 순회 합계',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int i = 0; i < arr._____; i++) {\n            sum += arr[i];\n        }\n        System.out._____(sum);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int sum = 0;\n        for (int i = 0; i < arr.le_____; i++) {\n            sum += arr[i];\n        }\n        System.out.pr_____(sum);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int sum = _____;\n        for (int i = 0; i < arr._____; i++) {\n            _____ += arr[i];\n        }\n        _____._____._____(sum);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['length','println'], PYTHON:['len(arr)','print'], CPP:['size()','cout'] }, medium:{ JAVA:['length','println'], PYTHON:['len(arr)','print'], CPP:['size()','cout'] }, hard:{ JAVA:['0','length','sum','System','out','println'], PYTHON:['0','len(arr)','sum','print'], CPP:['0','size()','sum','cout'] } },
      explanation:'배열 순회하여 합계를 구합니다. 배열 길이와 출력 함수/명령을 채웁니다.'
    },
    { id:'FB_E02', type:'fill_blank', title:'변수 선언',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        _____ x = 10;\n        System.out.println(x);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        in_____ x = 10;\n        System.out.pr_____(x);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        _____ x = _____;\n        _____._____._____(x);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['int'], PYTHON:['x'], CPP:['int'] }, medium:{ JAVA:['int','println'], PYTHON:['x','print'], CPP:['int','cout'] }, hard:{ JAVA:['int','10','System','out','println'], PYTHON:['x','10','print'], CPP:['int','10','cout'] } },
      explanation:'정수형 변수 선언과 초기화입니다. Java/C++은 int, Python은 타입 선언이 필요 없습니다.'
    },
    { id:'FB_E03', type:'fill_blank', title:'for 반복문',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i_____) {\n            System.out.println(i);\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        for (int i = 0; i < 5; i+_____) {\n            System.out.pr_____(i);\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        _____ (int i = 0; i < 5; i_____) {\n            _____._____._____(i);\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['++'], PYTHON:['in range(5):'], CPP:['++'] }, medium:{ JAVA:['+','println'], PYTHON:['in','print'], CPP:['+','cout'] }, hard:{ JAVA:['for','++','System','out','println'], PYTHON:['for','in range(5):','print'], CPP:['for','++','cout'] } },
      explanation:'0부터 4까지 반복하는 for 루프입니다. 증감 연산자와 반복문을 채웁니다.'
    },
    { id:'FB_E04', type:'fill_blank', title:'조건문',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x _____ 10) {\n            System.out.println("큼");\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int x = 15;\n        if (x >_____ 10) {\n            System.out.pr_____("큼");\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int x = 15;\n        _____ (x _____ 10) {\n            _____._____._____("큼");\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['>'], PYTHON:['>'], CPP:['>'] }, medium:{ JAVA:['','println'], PYTHON:['','print'], CPP:['','cout'] }, hard:{ JAVA:['if','>','System','out','println'], PYTHON:['if','>','print'], CPP:['if','>','cout'] } },
      explanation:'x가 10보다 큰지 비교합니다. 비교 연산자 > 를 사용합니다.'
    },
    { id:'FB_E05', type:'fill_blank', title:'메서드 호출',
      partialCode:{
        easy:'public class Main {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = _____(3, 4);\n        System.out.println(result);\n    }\n}',
        medium:'public class Main {\n    public static int add(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = ad_____(3, 4);\n        System.out.pr_____(result);\n    }\n}',
        hard:'public class Main {\n    public static int _____(int a, int b) {\n        return a + b;\n    }\n    public static void main(String[] args) {\n        int result = _____(3, _____);\n        System.out.println(result);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['add'], PYTHON:['add'], CPP:['add'] }, medium:{ JAVA:['add','println'], PYTHON:['add','print'], CPP:['add','cout'] }, hard:{ JAVA:['add','add','4'], PYTHON:['add','add','4'], CPP:['add','add','4'] } },
      explanation:'사용자 정의 메서드를 호출합니다. 메서드 이름과 인자를 채웁니다.'
    },
    { id:'FB_E06', type:'fill_blank', title:'배열 첫 요소',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30};\n        System.out.println(arr[_____]);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30};\n        System.out.pr_____(arr[0_____]);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {10, 20, 30};\n        _____._____._____(arr[_____]);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['0'], PYTHON:['0'], CPP:['0'] }, medium:{ JAVA:['println',''], PYTHON:['print',''], CPP:['cout',''] }, hard:{ JAVA:['System','out','println','0'], PYTHON:['print','0'], CPP:['cout','0'] } },
      explanation:'배열 첫 요소는 인덱스 0으로 접근합니다. 모든 언어에서 인덱스는 0부터 시작합니다.'
    },
    { id:'FB_E07', type:'fill_blank', title:'변수 교환',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        int temp = a;\n        a = b;\n        b = _____;\n        System.out.println(a);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        int temp = a;\n        a = b;\n        b = te_____;\n        System.out.pr_____(a);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int a = 5, b = 10;\n        int _____ = a;\n        a = _____;\n        b = _____;\n        System.out.println(a);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['temp'], PYTHON:['temp'], CPP:['temp'] }, medium:{ JAVA:['temp','println'], PYTHON:['temp','print'], CPP:['temp','cout'] }, hard:{ JAVA:['temp','b','temp'], PYTHON:['temp','b','temp'], CPP:['temp','b','temp'] } },
      explanation:'임시 변수(temp)를 사용해 두 변수의 값을 교환합니다.'
    },
    { id:'FB_E08', type:'fill_blank', title:'while 반복',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 3) {\n            System.out.println(i);\n            i_____;\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        while (i < 3) {\n            System.out.pr_____(i);\n            i+_____;\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int i = 0;\n        _____ (i < 3) {\n            _____._____._____(i);\n            i++;\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['++'], PYTHON:[' += 1'], CPP:['++'] }, medium:{ JAVA:['println','+'], PYTHON:['print','+'], CPP:['cout','+'] }, hard:{ JAVA:['while','System','out','println'], PYTHON:['while','print'], CPP:['while','cout'] } },
      explanation:'while 조건이 참인 동안 반복합니다. 증감 연산자로 i를 증가시킵니다.'
    },
    { id:'FB_E09', type:'fill_blank', title:'논리 NOT',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        boolean flag = false;\n        if (!_____) {\n            System.out.println("참");\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        boolean flag = false;\n        if (!fl_____) {\n            System.out.pr_____("참");\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        boolean flag = false;\n        _____ (!_____) {\n            _____._____._____("참");\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['flag'], PYTHON:['flag'], CPP:['flag'] }, medium:{ JAVA:['flag','println'], PYTHON:['flag','print'], CPP:['flag','cout'] }, hard:{ JAVA:['if','flag','System','out','println'], PYTHON:['if','flag','print'], CPP:['if','flag','cout'] } },
      explanation:'논리 NOT 연산자(!)로 boolean 값을 반전합니다.'
    },
    { id:'FB_E10', type:'fill_blank', title:'2차원 배열',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[][] arr = {{1, 2}, {3, 4}};\n        System.out.println(arr[1][_____]);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[][] arr = {{1, 2}, {3, 4}};\n        System.out.pr_____(arr[1][0_____]);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[][] arr = {{1, 2}, {3, 4}};\n        _____._____._____(arr[_____][_____]);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['0'], PYTHON:['0'], CPP:['0'] }, medium:{ JAVA:['println',''], PYTHON:['print',''], CPP:['cout',''] }, hard:{ JAVA:['System','out','println','1','0'], PYTHON:['print','1','0'], CPP:['cout','1','0'] } },
      explanation:'2차원 배열 arr[1][0]은 두번째 행, 첫번째 열의 값 3입니다.'
    }
  ],
  '보통': [
    { id:'FB_M01', type:'fill_blank', title:'배열 최대값',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {3, 1, 4, 1, 5};\n        int max = arr[0];\n        for (int i = 1; i < arr._____; i++) {\n            if (arr[i] > max) {\n                max = arr[i];\n            }\n        }\n        System.out._____(max);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {3, 1, 4, 1, 5};\n        int max = arr[0];\n        for (int i = 1; i < arr.le_____; i++) {\n            if (arr[i] > ma_____) {\n                max = arr[i];\n            }\n        }\n        System.out.pr_____(max);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {3, 1, 4, 1, 5};\n        int max = arr[_____];\n        for (int i = _____; i < arr._____; i++) {\n            if (arr[i] > _____) {\n                max = arr[i];\n            }\n        }\n        _____._____._____(max);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['length','println'], PYTHON:['len(arr)','print'], CPP:['size()','cout'] }, medium:{ JAVA:['length','max','println'], PYTHON:['len(arr)','max','print'], CPP:['size()','max','cout'] }, hard:{ JAVA:['0','1','length','max','System','out','println'], PYTHON:['0','1','len(arr)','max','print'], CPP:['0','1','size()','max','cout'] } },
      explanation:'배열 최대값 찾기. 첫 요소를 최대값으로 설정 후 나머지와 비교합니다.'
    },
    { id:'FB_M02', type:'fill_blank', title:'팩토리얼',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int n = 5;\n        int result = 1;\n        for (int i = 2; i <= n; i++) {\n            result *= i;\n        }\n        System.out._____(result);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int n = 5;\n        int result = 1_____;\n        for (int i = 2; i <= n; i++) {\n            result *= i;\n        }\n        System.out.pr_____(result);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int n = 5;\n        int result = _____;\n        for (int i = _____; i <= n; i++) {\n            result _____= i;\n        }\n        System.out.println(result);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['','println'], PYTHON:['','print'], CPP:['','cout'] }, hard:{ JAVA:['1','2','*'], PYTHON:['1','2','*'], CPP:['1','2','*'] } },
      explanation:'n! 팩토리얼 계산. 1부터 n까지 곱합니다. result를 1로 초기화 후 2부터 곱합니다.'
    },
    { id:'FB_M03', type:'fill_blank', title:'문자열 뒤집기',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        String rev = "";\n        for (int i = s.length() - 1; i >= 0; i_____) {\n            rev += s.charAt(i);\n        }\n        System.out._____(rev);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        String rev = "";\n        for (int i = s.le_____() - 1; i >= 0; i-_____) {\n            rev += s.ch_____(i);\n        }\n        System.out.println(rev);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        String s = "hello";\n        String rev = _____;\n        for (int i = s._____() - 1; i >= 0; i_____) {\n            rev += s._____(i);\n        }\n        System.out.println(rev);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['--','println'], PYTHON:['-1','print'], CPP:['--','cout'] }, medium:{ JAVA:['length','-','charAt'], PYTHON:['len','-','[]'], CPP:['length','-','[]'] }, hard:{ JAVA:['""','length','--','charAt'], PYTHON:['""','len','-1','[]'], CPP:['""','length','--','[]'] } },
      explanation:'문자열 역순 만들기. 끝에서부터 한 글자씩 가져와 새 문자열을 만듭니다.'
    },
    { id:'FB_M04', type:'fill_blank', title:'소수 판별',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int n = 7;\n        boolean isPrime = true;\n        for (int i = 2; i < n; i++) {\n            if (n % i == 0) {\n                isPrime = _____;\n                break;\n            }\n        }\n        System.out._____(isPrime);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int n = 7;\n        boolean isPrime = true;\n        for (int i = 2; i < n; i++) {\n            if (n % i == 0) {\n                isPrime = fa_____;\n                br_____;\n            }\n        }\n        System.out.println(isPrime);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int n = 7;\n        boolean isPrime = _____;\n        for (int i = 2; i < n; i++) {\n            if (n % i == _____) {\n                isPrime = false;\n                break;\n            }\n        }\n        System.out._____(isPrime);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['false','println'], PYTHON:['False','print'], CPP:['false','cout'] }, medium:{ JAVA:['false','break'], PYTHON:['False','break'], CPP:['false','break'] }, hard:{ JAVA:['true','0','println'], PYTHON:['True','0','print'], CPP:['true','0','cout'] } },
      explanation:'소수 판별. 2부터 n-1까지 나누어 떨어지면 소수가 아닙니다.'
    },
    { id:'FB_M05', type:'fill_blank', title:'구구단',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        for (int i = 1; i <= 9; i++) {\n            System.out._____(n + " * " + i + " = " + n * i);\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        for (int i = 1; i <= 9_____; i++) {\n            System.out.pr_____(n + " * " + i + " = " + n * i);\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int n = 3;\n        for (int i = _____; i <= _____; i++) {\n            _____._____._____(n + " * " + i + " = " + n * i);\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['','println'], PYTHON:['','print'], CPP:['','cout'] }, hard:{ JAVA:['1','9','System','out','println'], PYTHON:['1','9','print'], CPP:['1','9','cout'] } },
      explanation:'구구단 3단 출력. 1부터 9까지 반복하며 곱셈 결과를 출력합니다.'
    },
    { id:'FB_M06', type:'fill_blank', title:'배열 역순',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i = arr.length - 1; i >= 0; i--) {\n            System.out._____(arr[i]);\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i = arr.le_____ - 1; i >= 0; i--) {\n            System.out.pr_____(arr[i]);\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        for (int i = arr._____ - 1; i >= _____; i--) {\n            _____._____._____(arr[i]);\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['length','println'], PYTHON:['len','print'], CPP:['size','cout'] }, hard:{ JAVA:['length','0','System','out','println'], PYTHON:['len','0','print'], CPP:['size','0','cout'] } },
      explanation:'배열 마지막 요소부터 역순 출력. 인덱스는 length-1부터 0까지 감소합니다.'
    },
    { id:'FB_M07', type:'fill_blank', title:'최소공배수',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int a = 4, b = 6;\n        int lcm = a * b;\n        for (int i = a * b; i >= a && i >= b; i--) {\n            if (i % a == 0 && i % b == 0) {\n                lcm = i;\n            }\n        }\n        System.out._____(lcm);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int a = 4, b = 6;\n        int lcm = a * b;\n        for (int i = a * b; i >= a && i >= b; i-_____) {\n            if (i % a == 0 && i % b == 0) {\n                lcm = i;\n            }\n        }\n        System.out.pr_____(lcm);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int a = 4, b = 6;\n        int lcm = a * b;\n        for (int i = a * b; i >= a && i >= b; i_____) {\n            if (i % a == _____ && i % b == _____) {\n                lcm = i;\n            }\n        }\n        System.out.println(lcm);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['-','println'], PYTHON:['-','print'], CPP:['-','cout'] }, hard:{ JAVA:['--','0','0'], PYTHON:['-1','0','0'], CPP:['--','0','0'] } },
      explanation:'두 수의 공배수 중 최소값. a*b에서 역순 탐색하며 양쪽 모두 나누어 떨어지는 수를 찾습니다.'
    },
    { id:'FB_M08', type:'fill_blank', title:'피보나치',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int a = 0, b = 1;\n        for (int i = 0; i < 5; i++) {\n            int temp = a + b;\n            a = b;\n            b = temp;\n        }\n        System.out._____(a);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int a = 0_____, b = 1;\n        for (int i = 0; i < 5; i++) {\n            int temp = a + b;\n            a = b;\n            b = te_____;\n        }\n        System.out.println(a);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int a = _____, b = _____;\n        for (int i = 0; i < 5; i++) {\n            int _____ = a + b;\n            a = _____;\n            b = _____;\n        }\n        System.out.println(a);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['','temp'], PYTHON:['','temp'], CPP:['','temp'] }, hard:{ JAVA:['0','1','temp','b','temp'], PYTHON:['0','1','temp','b','temp'], CPP:['0','1','temp','b','temp'] } },
      explanation:'피보나치 수열. 0,1로 시작하여 이전 두 수의 합으로 진행됩니다. 5회 반복 후 a=5.'
    },
    { id:'FB_M09', type:'fill_blank', title:'자릿수 합',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int n = 123;\n        int sum = 0;\n        while (n > 0) {\n            sum += n % 10;\n            n /= 10;\n        }\n        System.out._____(sum);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int n = 123;\n        int sum = 0_____;\n        while (n > 0) {\n            sum += n % 10;\n            n /= 10;\n        }\n        System.out.pr_____(sum);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int n = 123;\n        int sum = _____;\n        while (n > _____) {\n            sum += n % _____;\n            n /= 10;\n        }\n        System.out.println(sum);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['','println'], PYTHON:['','print'], CPP:['','cout'] }, hard:{ JAVA:['0','0','10'], PYTHON:['0','0','10'], CPP:['0','0','10'] } },
      explanation:'123의 각 자릿수 합=6. 10으로 나눈 나머지로 마지막 자릿수를 구합니다.'
    },
    { id:'FB_M10', type:'fill_blank', title:'대소문자 변환',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        String s = "Hello";\n        System.out.println(s.to_____Case());\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        String s = "Hello";\n        System.out.println(s.toUp_____());\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        String s = "Hello";\n        _____._____._____(s._____Case());\n    }\n}'
      },
      answer:{ easy:{ JAVA:['Upper'], PYTHON:['upper'], CPP:['upper'] }, medium:{ JAVA:['Upper'], PYTHON:['upper'], CPP:['upper'] }, hard:{ JAVA:['System','out','println','toUpper'], PYTHON:['print','upper'], CPP:['cout','upper'] } },
      explanation:'문자열 대문자 변환. Java는 toUpperCase(), Python은 upper(), C++은 toupper를 사용합니다.'
    }
  ],
  '어려움': [
    { id:'FB_H01', type:'fill_blank', title:'버블 정렬',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        for (int i = 0; i < arr.length - 1; i++) {\n            for (int j = 0; j < arr.length - 1 - i; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = _____;\n                }\n            }\n        }\n        for (int x : arr) System.out.print(x + " ");\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        for (int i = 0; i < arr.le_____ - 1; i++) {\n            for (int j = 0; j < arr.le_____ - 1 - i; j++) {\n                if (arr[j] > arr[j + 1]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = te_____;\n                }\n            }\n        }\n        for (int x : arr) System.out.print(x + " ");\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        for (int i = 0; i < arr._____ - 1; i++) {\n            for (int j = 0; j < arr._____ - 1 - i; j++) {\n                if (arr[j] > arr[j + _____]) {\n                    int temp = arr[j];\n                    arr[j] = arr[j + 1];\n                    arr[j + 1] = _____;\n                }\n            }\n        }\n        for (int x : arr) _____._____._____(x + " ");\n    }\n}'
      },
      answer:{ easy:{ JAVA:['temp'], PYTHON:['temp'], CPP:['temp'] }, medium:{ JAVA:['length','length','temp'], PYTHON:['len','len','temp'], CPP:['size','size','temp'] }, hard:{ JAVA:['length','length','1','temp','System','out','print'], PYTHON:['len','len','1','temp','print'], CPP:['size','size','1','temp','cout'] } },
      explanation:'버블 정렬. 인접 요소를 비교하여 큰 값을 뒤로 보냅니다.'
    },
    { id:'FB_H02', type:'fill_blank', title:'선택 정렬',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        for (int i = 0; i < arr.length - 1; i++) {\n            int minIdx = i;\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j] < arr[minIdx]) {\n                    minIdx = j;\n                }\n            }\n            int temp = arr[i];\n            arr[i] = arr[minIdx];\n            arr[minIdx] = _____;\n        }\n        for (int x : arr) System.out.print(x + " ");\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        for (int i = 0; i < arr.le_____ - 1; i++) {\n            int minIdx = i;\n            for (int j = i + 1; j < arr.length; j++) {\n                if (arr[j] < arr[minIdx]) {\n                    minIdx = j;\n                }\n            }\n            int temp = arr[i];\n            arr[i] = arr[minIdx];\n            arr[minIdx] = te_____;\n        }\n        for (int x : arr) System.out.print(x + " ");\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 1, 4, 2};\n        for (int i = 0; i < arr._____ - 1; i++) {\n            int minIdx = i;\n            for (int j = i + _____; j < arr.length; j++) {\n                if (arr[j] < arr[minIdx]) {\n                    minIdx = _____;\n                }\n            }\n            int temp = arr[i];\n            arr[i] = arr[minIdx];\n            arr[minIdx] = _____;\n        }\n        for (int x : arr) _____._____._____(x + " ");\n    }\n}'
      },
      answer:{ easy:{ JAVA:['temp'], PYTHON:['temp'], CPP:['temp'] }, medium:{ JAVA:['length','temp'], PYTHON:['len','temp'], CPP:['size','temp'] }, hard:{ JAVA:['length','1','j','temp','System','out','print'], PYTHON:['len','1','j','temp','print'], CPP:['size','1','j','temp','cout'] } },
      explanation:'선택 정렬. 남은 범위에서 최소값을 찾아 앞으로 교환합니다.'
    },
    { id:'FB_H03', type:'fill_blank', title:'이진 탐색',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 3, 5, 7, 9};\n        int target = 5;\n        int left = 0, right = arr.length - 1;\n        while (left <= right) {\n            int mid = (left + right) / 2;\n            if (arr[mid] == target) {\n                System.out.println("Found");\n                _____;\n            } else if (arr[mid] < target) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 3, 5, 7, 9};\n        int target = 5;\n        int left = 0, right = arr.le_____ - 1;\n        while (left <= right) {\n            int mid = (left + right) / 2;\n            if (arr[mid] == target) {\n                System.out.println("Found");\n                br_____;\n            } else if (arr[mid] < target) {\n                left = mid + 1;\n            } else {\n                right = mid - 1;\n            }\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 3, 5, 7, 9};\n        int target = 5;\n        int left = _____, right = arr._____ - 1;\n        while (left <= right) {\n            int mid = (left + right) / 2;\n            if (arr[mid] == target) {\n                _____._____._____("Found");\n                break;\n            } else if (arr[mid] < target) {\n                left = mid + _____;\n            } else {\n                right = mid - _____;\n            }\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['break'], PYTHON:['break'], CPP:['break'] }, medium:{ JAVA:['length','break'], PYTHON:['len','break'], CPP:['size','break'] }, hard:{ JAVA:['0','length','System','out','println','1','1'], PYTHON:['0','len','print','1','1'], CPP:['0','size','cout','1','1'] } },
      explanation:'이진 탐색. 중간값 기준 탐색 범위를 좁힙니다. 찾으면 break, 아니면 left/right 조절.'
    },
    { id:'FB_H04', type:'fill_blank', title:'슬라이딩 윈도우',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 4, 2, 10, 23, 3, 1, 0, 20};\n        int k = 4;\n        int maxSum = 0;\n        for (int i = 0; i < k; i++) maxSum += arr[i];\n        int windowSum = maxSum;\n        for (int i = k; i < arr.length; i++) {\n            windowSum += arr[i] - arr[i - k];\n            maxSum = Math.max(maxSum, windowSum);\n        }\n        System.out._____(maxSum);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 4, 2, 10, 23, 3, 1, 0, 20};\n        int k = 4;\n        int maxSum = 0;\n        for (int i = 0; i < k; i++) maxSum += arr[i];\n        int windowSum = maxSum;\n        for (int i = k; i < arr.le_____; i++) {\n            windowSum += arr[i] - arr[i - k];\n            maxSum = Math.ma_____(maxSum, windowSum);\n        }\n        System.out.println(maxSum);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 4, 2, 10, 23, 3, 1, 0, 20};\n        int k = 4;\n        int maxSum = _____;\n        for (int i = 0; i < k; i++) maxSum += arr[i];\n        int windowSum = maxSum;\n        for (int i = k; i < arr._____; i++) {\n            windowSum += arr[i] - arr[i - _____];\n            maxSum = Math._____(maxSum, windowSum);\n        }\n        System.out.println(maxSum);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['length','max'], PYTHON:['len','max'], CPP:['size','max'] }, hard:{ JAVA:['0','length','k','max'], PYTHON:['0','len','k','max'], CPP:['0','size','k','max'] } },
      explanation:'연속 k개 요소 합의 최대값. 윈도우를 한 칸씩 이동하며 최대값 갱신.'
    },
    { id:'FB_H05', type:'fill_blank', title:'투 포인터',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int target = 5;\n        int left = 0, right = arr.length - 1;\n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            if (sum == target) {\n                System.out.println(left + " " + right);\n                break;\n            } else if (sum < target) {\n                left_____;\n            } else {\n                right_____;\n            }\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int target = 5;\n        int left = 0, right = arr.le_____ - 1;\n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            if (sum == target) {\n                System.out.println(left + " " + right);\n                break;\n            } else if (sum < target) {\n                left+_____;\n            } else {\n                right-_____;\n            }\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 3, 4, 5};\n        int target = 5;\n        int left = _____, right = arr._____ - 1;\n        while (left < right) {\n            int sum = arr[left] + arr[right];\n            if (sum == target) {\n                _____._____._____(left + " " + right);\n                break;\n            } else if (sum < target) {\n                left_____;\n            } else {\n                right_____;\n            }\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:['++','--'], PYTHON:[' += 1',' -= 1'], CPP:['++','--'] }, medium:{ JAVA:['length','+','-'], PYTHON:['len','+','-'], CPP:['size','+','-'] }, hard:{ JAVA:['0','length','System','out','println','++','--'], PYTHON:['0','len','print',' += 1',' -= 1'], CPP:['0','size','cout','++','--'] } },
      explanation:'정렬된 배열에서 합이 target인 쌍 찾기. 양끝 포인터를 조절합니다.'
    },
    { id:'FB_H06', type:'fill_blank', title:'해시맵 빈도수',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 2, 3, 3, 3};\n        java.util.HashMap<Integer, Integer> map = new java.util.HashMap<>();\n        for (int x : arr) {\n            map.put(x, map.getOrDefault(x, 0) + 1);\n        }\n        System.out._____(map.get(3));\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 2, 3, 3, 3};\n        java.util.Ha_____<Integer, Integer> map = new java.util.HashMap<>();\n        for (int x : arr) {\n            map.put(x, map.get_____(x, 0) + 1);\n        }\n        System.out.println(map.get(3));\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int[] arr = {1, 2, 2, 3, 3, 3};\n        java.util._____<Integer, Integer> map = new java.util._____<>();\n        for (int x : arr) {\n            map.put(x, map._____(x, 0) + 1);\n        }\n        System.out.println(map._____(3));\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['HashMap','OrDefault'], PYTHON:['dict','get'], CPP:['map','count'] }, hard:{ JAVA:['HashMap','HashMap','getOrDefault','get'], PYTHON:['dict','dict','get','[]'], CPP:['map','map','count','[]'] } },
      explanation:'요소 빈도수 계산. HashMap에 각 요소의 등장 횟수를 저장합니다.'
    },
    { id:'FB_H07', type:'fill_blank', title:'DFS',
      partialCode:{
        easy:'public class Main {\n    static boolean[] visited;\n    static int[][] graph;\n    static void dfs(int node) {\n        visited[node] = true;\n        for (int i = 0; i < graph.length; i++) {\n            if (graph[node][i] == 1 && !visited[i]) {\n                dfs(i);\n            }\n        }\n    }\n    public static void main(String[] args) {\n        graph = new int[][]{{0,1,1},{1,0,0},{1,0,0}};\n        visited = new boolean[graph._____];\n        dfs(0);\n        System.out.println("Done");\n    }\n}',
        medium:'public class Main {\n    static boolean[] visited;\n    static int[][] graph;\n    static void dfs(int node) {\n        visited[node] = tr_____;\n        for (int i = 0; i < graph.le_____; i++) {\n            if (graph[node][i] == 1 && !visited[i]) {\n                dfs(i);\n            }\n        }\n    }\n    public static void main(String[] args) {\n        graph = new int[][]{{0,1,1},{1,0,0},{1,0,0}};\n        visited = new boolean[graph.length];\n        dfs(0);\n        System.out.println("Done");\n    }\n}',
        hard:'public class Main {\n    static boolean[] _____;\n    static int[][] graph;\n    static void dfs(int node) {\n        _____[node] = true;\n        for (int i = 0; i < graph._____; i++) {\n            if (graph[node][i] == 1 && !_____[i]) {\n                dfs(i);\n            }\n        }\n    }\n    public static void main(String[] args) {\n        graph = new int[][]{{0,1,1},{1,0,0},{1,0,0}};\n        visited = new boolean[graph._____];\n        dfs(0);\n        System.out.println("Done");\n    }\n}'
      },
      answer:{ easy:{ JAVA:['length'], PYTHON:['len'], CPP:['size'] }, medium:{ JAVA:['true','length'], PYTHON:['True','len'], CPP:['true','size'] }, hard:{ JAVA:['visited','visited','length','visited','length'], PYTHON:['visited','visited','len','visited','len'], CPP:['visited','visited','size','visited','size'] } },
      explanation:'DFS 깊이우선탐색. 노드 방문 후 인접 미방문 노드 재귀 탐색.'
    },
    { id:'FB_H08', type:'fill_blank', title:'DP 피보나치',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        int n = 10;\n        int[] dp = new int[n + 1];\n        dp[1] = 1;\n        for (int i = 2; i <= n; i++) {\n            dp[i] = dp[i - 1] + dp[i - 2];\n        }\n        System.out._____(dp[n]);\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        int n = 10;\n        int[] dp = new int[n + 1];\n        dp[1] = 1_____;\n        for (int i = 2; i <= n; i++) {\n            dp[i] = dp[i - 1] + dp[i - 2_____];\n        }\n        System.out.println(dp[n]);\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        int n = 10;\n        int[] dp = new int[n + _____];\n        dp[1] = _____;\n        for (int i = _____; i <= n; i++) {\n            dp[i] = dp[i - _____] + dp[i - _____];\n        }\n        System.out.println(dp[n]);\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['',''], PYTHON:['',''], CPP:['',''] }, hard:{ JAVA:['1','1','2','1','2'], PYTHON:['1','1','2','1','2'], CPP:['1','1','2','1','2'] } },
      explanation:'DP 피보나치. dp[i] = dp[i-1] + dp[i-2]. 10번째 피보나치 수 = 55.'
    },
    { id:'FB_H09', type:'fill_blank', title:'문자열 압축',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        String s = "aaabbc";\n        StringBuilder sb = new StringBuilder();\n        int count = 1;\n        for (int i = 1; i < s.length(); i++) {\n            if (s.charAt(i) == s.charAt(i - 1)) {\n                count++;\n            } else {\n                sb.append(s.charAt(i - 1)).append(count);\n                count = 1;\n            }\n        }\n        sb.append(s.charAt(s.length() - 1)).append(count);\n        System.out._____(sb.toString());\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        String s = "aaabbc";\n        StringBuilder sb = new St_____();\n        int count = 1;\n        for (int i = 1; i < s.le_____(); i++) {\n            if (s.ch_____(i) == s.charAt(i - 1)) {\n                count++;\n            } else {\n                sb.append(s.charAt(i - 1)).append(count);\n                count = 1;\n            }\n        }\n        sb.append(s.charAt(s.length() - 1)).append(count);\n        System.out.println(sb.toString());\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        String s = "aaabbc";\n        StringBuilder sb = new _____();\n        int count = _____;\n        for (int i = 1; i < s._____(); i++) {\n            if (s._____(i) == s.charAt(i - 1)) {\n                count++;\n            } else {\n                sb.append(s.charAt(i - 1)).append(count);\n                count = _____;\n            }\n        }\n        sb.append(s.charAt(s.length() - 1)).append(count);\n        System.out.println(sb.toString());\n    }\n}'
      },
      answer:{ easy:{ JAVA:['println'], PYTHON:['print'], CPP:['cout'] }, medium:{ JAVA:['StringBuilder','length','charAt'], PYTHON:['[]','len','[]'], CPP:['string','length','[]'] }, hard:{ JAVA:['StringBuilder','1','length','charAt','1'], PYTHON:['[]','1','len','[]','1'], CPP:['string','1','length','[]','1'] } },
      explanation:'문자열 압축. 연속 문자 개수를 세어 aaabbc → a3b2c1로 변환합니다.'
    },
    { id:'FB_H10', type:'fill_blank', title:'큐',
      partialCode:{
        easy:'public class Main {\n    public static void main(String[] args) {\n        java.util.LinkedList<Integer> q = new java.util.LinkedList<>();\n        q.offer(1);\n        q.offer(2);\n        q.offer(3);\n        while (!q.isEmpty()) {\n            System.out.print(q.poll() + " ");\n        }\n    }\n}',
        medium:'public class Main {\n    public static void main(String[] args) {\n        java.util.LinkedList<Integer> q = new java.util.LinkedList<>();\n        q.of_____(1);\n        q.offer(2);\n        q.offer(3);\n        while (!q.is_____()) {\n            System.out.print(q.po_____() + " ");\n        }\n    }\n}',
        hard:'public class Main {\n    public static void main(String[] args) {\n        java.util._____<Integer> q = new java.util.LinkedList<>();\n        q._____(1);\n        q.offer(2);\n        q.offer(3);\n        while (!q._____()) {\n            System.out.print(q._____() + " ");\n        }\n    }\n}'
      },
      answer:{ easy:{ JAVA:[], PYTHON:[], CPP:[] }, medium:{ JAVA:['offer','Empty','ll'], PYTHON:['append','len','p(0)'], CPP:['push','empty','p'] }, hard:{ JAVA:['LinkedList','offer','isEmpty','poll'], PYTHON:['list','append','len','pop(0)'], CPP:['queue','push','empty','pop'] } },
      explanation:'큐 FIFO 구조. offer/enqueue로 삽입, poll/dequeue로 제거.'
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = problems;
}
