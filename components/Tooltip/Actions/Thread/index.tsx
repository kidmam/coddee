import { ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid'
import { Tooltip } from 'components'
import type { FC } from 'react'

export interface Props {
  onClick: () => void
}
interface State {}

const ThreadTooltipAction: FC<Props> = ({ onClick }) => {
  return (
    <Tooltip
      content="스레드"
      size="sm"
      theme={window.localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'}
      border={window.localStorage.getItem('theme') !== 'dark'}
      className="flex h-7 w-7 items-center justify-center rounded hover:bg-neutral-100 dark:hover:bg-neutral-600"
    >
      <button onClick={onClick}>
        <ChatBubbleLeftEllipsisIcon className="h-4 w-4 text-neutral-600 dark:text-neutral-400" />
      </button>
    </Tooltip>
  )
}

export default ThreadTooltipAction
