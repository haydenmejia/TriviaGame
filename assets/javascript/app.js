$(document).ready(function () {
    var correct = 0;
    var incorrect = 0;
    var incorrectGuess = 0;
    var pass = 0;
    var fail = 0;
    var score = 0;

    function Answers(correctGuess) {
        if (correctGuess) {
            alert('Correct Answer');
            correct++;

            score = correct - incorrect;

            $('#score').text(score)
        }else {
            alert('Incorrect Guess');

            incorrect++;
            score = correct - incorrect;
            $('#score').text(score)
        }
    }

    $('.correct').on('click', function () {
        correctGuess = correct;
        $('#correctGuess').text(correctGuess);
        Answers(true);
    });
    $('.incorrect').on('click', function () {
        incorrectGuess = incorrect;
        $('#incorrectGuess').text(incorrectGuess);
        Answers(false);
    });
});

window.onload = function () {
    $('#display').text('01:30');
    stopwatch.start();
};

var intervalId;
var clockRunning = false;
var stopwatch = {

    time: 90,
    lap: 1,

    reset: function () {

        stopwatch.time = 90;
        stopwatch.lap = 1;

        $('#display').text('01:30');
    },

    start: function () {

        if (!clockRunning) {
            clockRunning = true;
            intervalId = setInterval(stopwatch.count, 1000);
        }

    },
    count: function () {

        if (stopwatch.time <= 0) {
            stopwatch.stop();
            alert('Times Up!');
        } else {
            stopwatch.time--;
            var currentTime = stopwatch.timeConverter(stopwatch.time);
            $('#display').text(currentTime);
        }
    },
    stop: function () {

        clearInterval(intervalId);
        clockRunning = false;
    },

    timeConverter: function (t) {


        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};