export function data() {
  return {
    template: 'the quick brown fox jumps over the lazy dog',
    input: null,
    started: false,
    startTime: null,
    finishTime: null,
    interval: null,
    elapsedTime: null,
    start() {
      this.input = ""
      this.$refs.typingInput.focus()

      clearInterval(this.interval)
      const self = this
      this.interval = setInterval(() => {
        self.elapsedTime = self.typingTime()
      }, 10);
    },
    isFinished() {
      const finished = this.template == this.input
      if (finished) {
        clearInterval(this.interval)
        this.started = false
        this.$refs.startButton.focus()
      }
      return finished
    },
    type() {
      if (!this.started) {
        this.started = true
        this.startTime = Date.now()
      }
    },
    typingTime() {
      return `${(Date.now() - this.startTime) / 1000}s`
    },
    startButtonText() {
      return this.isFinished() ? 'Restart' : 'Start'
    },
    focusStartButton() {
      this.$refs.startButton.focus()
    },
  }
}
