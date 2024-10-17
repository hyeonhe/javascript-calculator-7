import { Console } from "@woowacourse/mission-utils";

class App {
  async run() {
    const input = await Console.readLineAsync();

    const seperator = [":", ","];
    const CUSTOM_PATTERN = /\/\/\D+\\n/;
    const WHOLE_PATTERN = /\/\/\D+\\n[\s\S]+/;

    const isString = this.isString(input);

    if (isString) {
      if (WHOLE_PATTERN.test(input)) {
        const custom = input.match(CUSTOM_PATTERN);
        const customSeperator = custom[0]
          .split(/[//,\\n]/)
          .filter((i) => i.length > 0);
        seperator.push(...customSeperator);
      }
    }
  }

  isString(input) {
    if (typeof input === "string") {
      return true;
    }

    throw new Error("[ERROR] 문자열을 입력해주세요.");
  }
}

export default App;
