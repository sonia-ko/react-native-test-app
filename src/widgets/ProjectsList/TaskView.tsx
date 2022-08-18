import React, { useCallback, useState } from 'react'

import { Task } from 'app/types/Task'

import { Text, Card, Pressable } from 'app/ds'
import { View } from 'react-native'

import styles from './TaskView.styles'

export const TaskView: React.FC<{
  item: Task
}> = ({ item }) => {
  const [taskCompleted, setTaskCompleted] = useState(false)

  return (
    <Pressable
      onPress={useCallback(() => {
        setTaskCompleted(!taskCompleted)
      }, [taskCompleted])}
    >
      <Card style={styles.taskCard} my={4}>
        <Text typeface='default/14' color='default' mb={2}>
          {item.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {item.description}
        </Text>

        <View
          style={[styles.task, taskCompleted ? styles.taskCompleted : styles.taskNotCompleted]}
        ></View>
      </Card>
    </Pressable>
  )
}
