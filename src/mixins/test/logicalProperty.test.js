// @flow
import logicalProperty from '../logicalProperty'

describe('logicalProperty', () => {
  it('returns logical properties for caption-side', () => {
    expect(logicalProperty('captionSide', 'left')).toMatchSnapshot()
    expect(logicalProperty('captionSide', 'right')).toMatchSnapshot()
    expect(logicalProperty('caption-side', 'right')).toMatchSnapshot()
  })

  it('returns logical properties for float', () => {
    expect(logicalProperty('float', 'left')).toMatchSnapshot()
    expect(logicalProperty('float', 'right')).toMatchSnapshot()
  })

  it('returns logical properties for clear', () => {
    expect(logicalProperty('clear', 'left')).toMatchSnapshot()
    expect(logicalProperty('clear', 'right')).toMatchSnapshot()
  })

  it('returns logical properties for resize', () => {
    expect(logicalProperty('resize', 'horizontal')).toMatchSnapshot()
    expect(logicalProperty('resize', 'vertical')).toMatchSnapshot()
  })

  it('returns logical properties for text-align', () => {
    expect(logicalProperty('textAlign', 'left')).toMatchSnapshot()
    expect(logicalProperty('textAlign', 'right')).toMatchSnapshot()
    expect(logicalProperty('text-align', 'right')).toMatchSnapshot()
  })

  it('returns logical properties for height & width', () => {
    expect(logicalProperty('height', '200px')).toMatchSnapshot()
    expect(logicalProperty('width', '300px')).toMatchSnapshot()
  })

  it('returns logical properties for min/max-height & min/max- width', () => {
    expect(logicalProperty('minHeight', '200px')).toMatchSnapshot()
    expect(logicalProperty('minWidth', '300px')).toMatchSnapshot()
    expect(logicalProperty('maxHeight', '200px')).toMatchSnapshot()
    expect(logicalProperty('maxWidth', '300px')).toMatchSnapshot()
    expect(logicalProperty('min-height', '200px')).toMatchSnapshot()
    expect(logicalProperty('max-width', '300px')).toMatchSnapshot()
  })
})
