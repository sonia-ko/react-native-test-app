import React, { useCallback } from 'react'

import { Project } from 'app/types/Project'

import { Text, Card, Pressable } from 'app/ds'

export const ProjectItemView: React.FC<{
  project: Project
  onPress: (project: Project) => void
  style?: object
}> = ({ project, style, onPress }) => {
  return (
    <Pressable my={4} onPress={useCallback(() => onPress(project), [onPress, project])}>
      <Card style={style}>
        <Text typeface='default/14' color='default' mb={2}>
          {project.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {project.description}
        </Text>
      </Card>
    </Pressable>
  )
}
