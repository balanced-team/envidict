import React from 'react'
import { Text, Image, StyleSheet } from 'react-native'
import { View, ViewBase, Container } from 'native-base'
const DetailsView = () => {
  this.state = {
    titleText: 'representatives',
    pronounce: '/reabc/',
    typeText: 'adj',
    explain: 'tiêu biểu, điển hình',
    example: 'a meeting of representative of monastic life',
    exampleTrans: 'cuộc họp của những người tiêu biểu'
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>
        <Text style={styles.titleText}>
          {this.state.titleText}
          {'\n'}
        </Text>
        <Text>
          {this.state.pronounce}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.typeText}>
          {' '}
          > {this.state.typeText}
          {'\n'}
        </Text>
        <Text style={styles.explain}>
          1. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.explain}>
          2. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.explain}>
          3. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.typeText}>
          {' '}
          > {this.state.typeText}
          {'\n'}
        </Text>
        <Text style={styles.explain}>
          4. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.explain}>
          3. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.explain}>
          3. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
      <Text style={styles.baseText}>
        <Text style={styles.explain}>
          3. {this.state.explain}
          {'\n'}
        </Text>
        <Text style={styles.example}>
          {this.state.example}
          {'\n'}
        </Text>
        <Text style={styles.exampleTrans}>
          {' '}
          > {this.state.exampleTrans}
          {'\n'}
        </Text>
      </Text>
    </View>
  )
}

export default DetailsView
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    overflow: 'visible'
  },
  headText: {
    paddingLeft: 10,
    paddingTop: 16
  },
  baseText: {
    fontSize: 18,
    paddingLeft: 16
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#044470',
    paddingTop: 20
  },
  pronounce: {
    color: '#4e4e4e',
    paddingLeft: 16
  },
  typeText: {
    fontSize: 16,
    color: '#0468b6'
  },
  explain: {
    color: '#003764',
    paddingTop: 20
  },
  example: {
    color: '#4297d3',
    fontStyle: 'italic',
    paddingTop: 14
  },
  exampleTrans: {
    color: '#8b8b8b'
  }
})
