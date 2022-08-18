import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'

import { Header } from 'app/ds'

import { ProjectItemView } from './ProjectItemView'
import styles from './ProjectsListView.styles'

export const ProjectsListView: React.FC<{
  projects: Project[]
  selectedProject?: string
  onProjectPress: (project: Project) => void
}> = ({ projects, onProjectPress, selectedProject }) => {
  const renderItem = useCallback(
    ({ item }: { item: Project }) => {
      return (
        <ProjectItemView
          style={item.name === selectedProject ? styles.selected : {}}
          project={item}
          onPress={onProjectPress}
        />
      )
    },
    [selectedProject]
  )

  return (
    <FlatList
      data={projects}
      ListHeaderComponent={<Header mb={12}>Projects</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
