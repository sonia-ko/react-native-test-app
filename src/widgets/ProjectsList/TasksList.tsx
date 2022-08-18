import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Header } from 'app/ds'

import { Task } from 'app/types/Task'
import { TaskView } from './TaskView'

import styles from './ProjectsListView.styles'

export const TasksList: React.FC<{
  tasks: Task[]
  category: string
}> = ({ tasks, category }) => {
  const renderItem = useCallback(({ item }: { item: Task }) => <TaskView item={item} />, [])

  return (
    <FlatList
      data={tasks}
      ListHeaderComponent={
        <Header mb={12}> {category ? `Tasks for "${category}"` : 'All tasks'} </Header>
      }
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
