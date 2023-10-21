"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const question_1 = __importDefault(require("./question"));
function runQuiz() {
    return __awaiter(this, void 0, void 0, function* () {
        let score = 0;
        for (const question of question_1.default) {
            const { answer } = yield inquirer_1.default.prompt([
                {
                    type: 'list',
                    name: 'answer',
                    message: question.question,
                    choices: question.choices,
                },
            ]);
            if (answer === question.correctAnswer) {
                console.log('Correct!\n');
                score++;
            }
            else {
                console.log(`Wrong! The correct answer is ${question.correctAnswer}.\n`);
            }
        }
        console.log(`Quiz completed. Your score: ${score}/${question_1.default.length}`);
    });
}
runQuiz();
