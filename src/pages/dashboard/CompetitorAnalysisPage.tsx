import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Target, TrendingUp, Eye, AlertTriangle, CheckCircle, XCircle } from 'lucide-react'

export const CompetitorAnalysisPage = () => {
  const competitors = [
    {
      id: 1,
      name: 'Competitor A',
      marketShare: 35,
      growth: '+8%',
      strength: 'high',
      threats: ['Pricing', 'Innovation'],
      opportunities: ['Market expansion']
    },
    {
      id: 2,
      name: 'Competitor B',
      marketShare: 25,
      growth: '+12%',
      strength: 'medium',
      threats: ['Customer service'],
      opportunities: ['Product quality']
    },
    {
      id: 3,
      name: 'Competitor C',
      marketShare: 20,
      growth: '-2%',
      strength: 'low',
      threats: ['Market position'],
      opportunities: ['Cost leadership']
    }
  ]

  const marketInsights = [
    {
      id: 1,
      title: 'Market Share Analysis',
      description: 'Your position vs competitors',
      value: '20%',
      trend: '+3%',
      status: 'positive'
    },
    {
      id: 2,
      title: 'Competitive Threats',
      description: 'High-risk competitive moves',
      value: '3',
      trend: '-1',
      status: 'improving'
    },
    {
      id: 3,
      title: 'Market Opportunities',
      description: 'Untapped market segments',
      value: '5',
      trend: '+2',
      status: 'positive'
    },
    {
      id: 4,
      title: 'Competitive Advantage',
      description: 'Your unique strengths',
      value: 'Strong',
      trend: 'Stable',
      status: 'stable'
    }
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'positive':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'improving':
        return <TrendingUp className="w-4 h-4 text-blue-600" />
      case 'stable':
        return <Eye className="w-4 h-4 text-gray-600" />
      default:
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Competitor Analysis</h1>
          <p className="text-gray-600 mt-2">Monitor competitive landscape and market positioning</p>
        </div>
        <Button className="flex items-center gap-2">
          <Target className="w-4 h-4" />
          Update Analysis
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketInsights.map((insight) => (
          <Card key={insight.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{insight.title}</CardTitle>
              {getStatusIcon(insight.status)}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{insight.value}</div>
              <p className="text-xs text-muted-foreground">{insight.description}</p>
              <p className="text-xs text-green-600 mt-1">{insight.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Competitor Overview</CardTitle>
            <CardDescription>Key metrics and positioning analysis</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {competitors.map((competitor) => (
                <div key={competitor.id} className="border rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-medium">{competitor.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{competitor.marketShare}%</span>
                      <span className="text-sm text-gray-600">market share</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Growth:</span>
                      <span className={`text-sm font-medium ${
                        competitor.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {competitor.growth}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Strength:</span>
                      <span className={`text-sm font-medium capitalize ${
                        competitor.strength === 'high' ? 'text-red-600' :
                        competitor.strength === 'medium' ? 'text-yellow-600' : 'text-green-600'
                      }`}>
                        {competitor.strength}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium text-red-600 mb-1">Threats:</p>
                      <ul className="space-y-1">
                        {competitor.threats.map((threat, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <XCircle className="w-3 h-3 text-red-500" />
                            {threat}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium text-green-600 mb-1">Opportunities:</p>
                      <ul className="space-y-1">
                        {competitor.opportunities.map((opportunity, index) => (
                          <li key={index} className="flex items-center gap-1">
                            <CheckCircle className="w-3 h-3 text-green-500" />
                            {opportunity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Competitive Intelligence</CardTitle>
            <CardDescription>Quick actions and insights</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-medium text-blue-900 mb-2">Market Alert</h4>
                <p className="text-sm text-blue-700">
                  Competitor A launched a new product line. Consider reviewing your pricing strategy.
                </p>
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Target className="w-4 h-4 mr-2" />
                  Run Competitive Analysis
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Market Share Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Threat Assessment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Opportunity Analysis
                </Button>
              </div>

              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-medium text-green-900 mb-2">Recommendation</h4>
                <p className="text-sm text-green-700">
                  Focus on customer service differentiation to gain market share from Competitor B.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 