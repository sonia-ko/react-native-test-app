import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useState, useEffect } from 'react'

import { Project } from 'app/types/Project'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksList } from './widgets/ProjectsList/TasksList'

import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

  let initialItems = PROJECTS.map(el => el.tasks).flat()

  const [itemsShown, setItemsShown] = useState(initialItems)

  const onProjectPress = useCallback((project: Project): void => {
    // TODO
    setSelectedCategory(prev => {
      if (prev === project.name) {
        return ''
      }

      return project.name
    })
  }, [])

  useEffect(() => {
    const newSelectedItems = PROJECTS.filter(el => el.name.includes(selectedCategory))
      .map(el => el.tasks)
      .flat()
    setItemsShown(newSelectedItems)
  }, [selectedCategory])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView
          projects={PROJECTS}
          onProjectPress={onProjectPress}
          selectedProject={selectedCategory}
        />
      </View>
      <View style={[styles.column, styles.secondColumn]}>
        <TasksList tasks={itemsShown} category={selectedCategory} />
      </View>
    </View>
  )
}

export default App
