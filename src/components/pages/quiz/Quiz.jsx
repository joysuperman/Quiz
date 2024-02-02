import Answers from '../../helper/answars/Answars'
import ProgressBar from '../../helper/progressBar/ProgressBar'
import MiniPlayer from '../../helper/miniPlayer/MiniPlayer'
export default function Quiz() {
  return (
    <>
        <h1>Pick three of your favorite Star Wars Flims</h1>
        <h4>Question can have multiple answers</h4>

        <Answers />
        <ProgressBar />
        <MiniPlayer />
    </>
  )
}
