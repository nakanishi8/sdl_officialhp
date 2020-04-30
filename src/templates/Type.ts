export interface Frontmatter {
  date: string
  path: string
  title: string
  pagetype: string
  categoryslug: string
  tags?: string[] | null | undefined
  draft: boolean
  thumbnail: {
    childImageSharp: {
      original: {
        src: string
      }
    }
  }
  image: {
    childImageSharp: {
      fluid: {
        src: string
      }
    }
  }
}

export interface MarkdownRemark {
  markdownRemark: {
    frontmatter: Frontmatter
    html: string
  }
}

export interface Node {
  node: {
    frontmatter: Frontmatter
    html: string
  }
}
